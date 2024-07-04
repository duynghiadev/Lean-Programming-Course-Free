# Giả sử các biến đã được định nghĩa trước đó
x = 10
y = 5
number_of_closed_cases = 100
ncc = 3

# Các lệnh viết gọn
x += 1
x /= 2
x -= 1
x += y
x -= y + 7
x *= 2
number_of_closed_cases += 2 * ncc

# In ra kết quả để kiểm tra
print(f"x: {x}")
print(f"number_of_closed_cases: {number_of_closed_cases}")
