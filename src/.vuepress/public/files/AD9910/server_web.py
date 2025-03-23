from fastapi import FastAPI
from pydantic import BaseModel
from datetime import datetime

import uvicorn
import threading
from queue import Queue
import json
import serial
import serial.tools.list_ports


class BoundedQueue(Queue):
    def __init__(self, maxsize):
        super().__init__(maxsize)
        self._maxsize = maxsize

    def put(self, item) -> None:
        if self.qsize() < self._maxsize:
            super().put(item)
        else:
            self.get()
            super().put(item)

    def get_all(self) -> list[str]:
        elements = []
        while not self.empty():
            elements.append(self.get())
        return elements

    def clr(self) -> None:
        while not self.empty():
            self.get()


def send_to_stm32(device, string: str) -> None:
    for _ in range(10):
        # print(datetime.now(), "S")
        device.write(string.encode("utf-8"))


def read_from_stm32(device, queue: BoundedQueue) -> None:
    while True:
        if device.in_waiting:
            data = device.read(device.in_waiting).decode()
            # print("Received:", data)
            if "SYS:TRIG" in data:
                queue.put(str(datetime.now()))


def get_time_seq(queue: BoundedQueue) -> list[str]:
    if not queue.empty():
        return queue.get_all()
    else:
        return []


def clear_time_seq(queue: BoundedQueue) -> None:
    queue.clr()


class Item(BaseModel):
    text: str


app = FastAPI()


@app.get("/test/")
async def test():
    return {"res": 1}


@app.post("/ctr/")
async def ctr(message: Item):
    global buffered_queue
    data = message.text
    print(datetime.now(), 'receive msg:', data)
    if data == "SYS:CURVE:START":
        # 开始扫频曲线
        send_thread = threading.Thread(target=send_to_stm32, args=(stm32, data))
        send_thread.start()
        return {"res": message.text}
    elif data == "SYS:CURVE:STOP":
        # 结束扫频曲线
        send_thread = threading.Thread(target=send_to_stm32, args=(stm32, data))
        send_thread.start()
        return {"res": message.text}
    elif data == "SYS:RESET":
        # 结束扫频曲线
        send_thread = threading.Thread(target=send_to_stm32, args=(stm32, data))
        send_thread.start()
        return {"res": message.text}
    elif data == "SYS:TIME:GET?":
        # 获取时间序列
        if buffered_queue.empty() or buffered_queue.qsize() < 10:
            return {"error": "now queue size " + str(buffered_queue.qsize())}
        else:
            return json.dumps(get_time_seq(buffered_queue))
    elif data == "SYS:TIME:CLR":
        # 清除时间序列
        clear_time_seq(buffered_queue)
        return {"res": message.text}


def run_server():
    """
    Starts the web server using uvicorn.

    This function is only intended to be called from the if __name__ == "__main__": block.
    It will not return until the web server is stopped.

    :return None:
    """
    uvicorn.run(app, host="127.0.0.1", port=56789)


buffered_queue = BoundedQueue(maxsize=1000)

if __name__ == "__main__":
    for port in serial.tools.list_ports.comports():
        if "STM" in port.description:
            portname = port.device
            break
    else:
        print("未找到设备")
        exit()

    with serial.Serial(portname, 115200) as stm32:

        read_thread = threading.Thread(target=read_from_stm32, args=(stm32, buffered_queue))
        server_thread = threading.Thread(target=run_server)
        server_thread.start()

        read_thread.start()

        read_thread.join()
