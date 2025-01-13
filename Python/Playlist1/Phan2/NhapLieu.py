# print("Mời bạn nhập giá trị:")

# Mình đưa cái input vô như này lun (ở đây mình khai báo giá trị có kiể integer nên mình chỉ nhập number thôi)
s = int(input("Mời bạn nhập giá trị integer: "))

print("Bạn nhập =", s)
print(type(s))

print("*" * 20)

# nhập kiểu số thực
a = float(input("Mời bạn nhập giá trị float: "))

print("Bạn nhập =", a)
print(type(a))

print("*" * 20)


def StrToBool(s):
    return s.lower() in ("true", "t", 1, "yes")


x = input("Mời bạn nhập True/False: ")
x = StrToBool(x)
print("x:", x)
