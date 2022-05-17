# -*- coding:utf-8 -*-

from datetime import datetime, date
import time
from tokenize import String
from xmlrpc.client import Boolean
import nanoid
import os
import getopt
import sys


def newMD(file_date: String, isNow: Boolean):

    filename = file_date + ".md"

    while os.path.exists("blogs/" + filename):
        filename = file_date + "-" + nanoid.generate('1234567890abcdef', 6) + ".md"

    if isNow:
        file_date = datetime.strftime(datetime.now(),'%Y-%m-%d %H:%M:%S')

    with open("blogs/" + filename, "w") as fp:
        fp.write("---\n")
        fp.write("title: \n")
        fp.write("date: " + file_date + "\n")
        fp.write("tags: \n    - \n")
        fp.write("categories: \n    - \n")
        fp.write("---\n")

    return filename


if __name__ == "__main__":
    opts, args = getopt.getopt(sys.argv[1:],
                               "hd:",
                               ["help", "date="])
    file_date = str(date.today())
    isNow = True
    for opt, arg in opts:
        if opt == "-h" or opt == "--help":
            print("--date\t-d\n"
                  "\tdefault: today\n\texample: 1999-01-05")
            exit(0)
        elif opt == "-d" or opt == "--date":
            try:
                file_date = datetime.strptime(arg, "%Y-%m-%d").strftime("%Y-%m-%d")
            except Exception as e:
                print(e)
                print("wrong date formate: " + arg)
                exit(0)
            isNow = False
    print(newMD(file_date=file_date, isNow=isNow))
