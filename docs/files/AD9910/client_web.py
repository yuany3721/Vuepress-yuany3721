import requests
import json


def test_server(url: str = "http://127.0.0.1:56789/test/"):
    """
    测试服务端连通性

    :param url: test URL
    :return: 返回True为正常，False为异常
    """
    response = requests.get(url)
    return response.status_code == 200 and json.loads(response.text)["res"] == 1


def get_server(message: str, url: str = "http://127.0.0.1:56789/ctr/"):
    """
    发送命令

    :param message: message to send
    :param url: URL to send to
    :return: 返回True为正常，False为异常
    """
    data = {
        "text": message
    }

    json_data = json.dumps(data)

    headers = {
        "Content-Type": "application/json"
    }
    response = requests.post(url, data=json_data, headers=headers)
    return response.status_code == 200 and json.loads(response.text)["res"] == message


def post_server(message: str, url: str = "http://127.0.0.1:56789/ctr/"):
    """
    发送命令

    :param message: message to send
    :param url: URL to send to
    :return: 返回True为正常，False为异常
    """
    data = {
        "text": message
    }

    json_data = json.dumps(data)

    headers = {
        "Content-Type": "application/json"
    }
    response = requests.post(url, data=json_data, headers=headers)
    if response.status_code == 200:
        return json.loads(response.text)
    else:
        return {"error": "status code: " + str(response.status_code)}


def get_time_seq() -> list[str]:
    """
    获取时间序列
    :return time_seq: list[str] 
    :str日期格式为："2024-01-23 01:23:45.123456"
    :dict: 检查"message"字段是否为"ok"，如果是则存在"data"字段为长度范围在10~1000的list；如果长度不足10，"message"字段会返回当前长度信息（示例：{'message': 'now queue size 1'}），这时不存在"data"字段
    """
    data = post_server(message="SYS:TIME:GET?")
    if "error" in data:
        return {"message": data["error"]}
    data = json.loads(data)
    return {
        "message": "ok",
        "data": data
    }


def clr_time_seq() -> None:
    """
    清空时间序列
    """
    return get_server(message="SYS:TIME:CLR")


def curve_start() -> None:
    """
    扫频一级触发信号
    """
    return get_server(message="SYS:CURVE:START")


def curve_stop() -> None:
    """
    扫频结束信号，立即结束扫频
    """
    return get_server(message="SYS:CURVE:STOP")


def reset_brd() -> None:
    """
    软件重置AD9910
    """
    return get_server(message="SYS:RESET")


if __name__ == "__main__":
    # print(test_server())
    # print(curve_start())
    # print(curve_stop())
    # print(reset_brd())
    '''
    res = get_time_seq()
    if res["message"] == "ok":
        print(len(res["data"]))
        print(res["data"])
    else:
        print(res)
    '''
    print(clr_time_seq())
