print("📆 Chương trình đếm số ngày trong tháng 📆")

month = int(input("Nhập vào 1 tháng: "))
if month in (1, 3, 5, 7, 8, 10, 12):
    print("Tháng ", month, " có 31 ngày")
elif month in (4, 6, 9, 11, 12):
    print("Tháng ", month, " có 30 ngày")
elif month == 2:
    year = int(input("Mời bạn nhập vào năm: "))
    if year % 4 == 0 and year % 100 != 0 or year % 400 == 0:
        print('Tháng', month, 'có 29 ngày')
    else:
        print("Tháng", month, 'có 28 ngày')
else:
    print("Tháng không hợp lệ")