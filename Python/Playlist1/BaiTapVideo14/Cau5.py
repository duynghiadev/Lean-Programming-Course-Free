# Trình bày các loại lỗi khi lập trình và cách bắt lỗi trong Python
# Python có nhiều loại lỗi phổ biến, bao gồm:

# ❌ 1. SyntaxError (lỗi cú pháp): Xảy ra khi mã không tuân theo quy tắc cú pháp của Python
# print("hello) # Lỗi thiếu dấu ngoặc kép đóng

# ❌ 2. IndentationError (lỗi thụt lề): xảy ra khi thụt lề không đúng
# if True:
# print("hello") # Lỗi: dòng print() phải được thụt vào

# ❌ 3. TypeError (lỗi kiểu dữ liệu): xảy ra khi bạn cố gắng sử dụng giá trị không đúng kiểu
# "2" + 2 # Lỗi: không thể cộng chuỗi với số

# ❌ 4. NameError (lỗi tên): Xảy ra khi bạn cố gắng sử dụng biến chưa được định nghĩa
# print(x) # Lỗi: x chưa được định nghĩa

# ❌ 5. IndexError (lỗi chỉ số): xảy ra khi bạn cố gắng truy cập chỉ số không tồn tại trong danh sách
# lst = [1, 2, 3]
# print(lst[3])  # Lỗi: danh sách chỉ có 3 phần tử, chỉ số 3 không tồn tại

# ❌ 6. ValueError (Lỗi giá trị): xảy ra khi hàm nhận giá trị không hợp lệ
# int("Hello")  # Lỗi: không thể chuyển đổi chuỗi "hello" thành số nguên

##############################################################

# Cách bắt lỗi: Sử dụng try-except để bắt lỗi và xử lý

try:
    x = int(input("Enter a numbe: "))
    print("Your entered: ", x)
except ValueError:
    print("Invalid input, Please enter a valid number.")
