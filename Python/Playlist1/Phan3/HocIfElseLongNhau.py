print("Nhập điểm trung bình: ")
dtb = float(input())

if dtb >= 9:
    print("Bạn đã xếp loại giỏi")
elif dtb >= 7:
    print("Bạn đã xếp loại khá")
elif dtb >= 5:
    print("Bạn đã xếp loại trung bình")
else:
    print("Chia tay nha!")
