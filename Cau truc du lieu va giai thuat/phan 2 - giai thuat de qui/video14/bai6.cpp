/**
 * Giải thích mã nguồn:
 *
 * - Hàm reverseNumber:
 * - Hàm này nhận vào hai tham số: n (số cần đảo ngược) và reversed (số đã đảo ngược đến thời điểm hiện tại, mặc định là 0).
 * - Điều kiện dừng: Nếu n bằng 0, trả về reversed, tức là số đã được đảo ngược hoàn toàn.
 * - Trong mỗi lần gọi đệ quy, lấy chữ số cuối cùng của n (bằng cách dùng n % 10) và thêm nó vào reversed sau khi nhân reversed với 10. Sau đó, gọi đệ quy với n chia cho 10 (bỏ chữ số cuối cùng).
 * - Hàm main:
 * - Yêu cầu người dùng nhập một số nguyên dương.
 * - Nếu số nhập vào không phải là số dương, in ra thông báo yêu cầu nhập lại.
 * - Nếu số nhập vào là số dương, gọi hàm reverseNumber để đảo ngược số đó và in kết quả ra màn hình.
 *
 * - Ví dụ:
 *
 * - Nếu người dùng nhập vào n là 1234:
 * - reverseNumber(1234) gọi reverseNumber(123, 4)
 * - reverseNumber(123) gọi reverseNumber(12, 43)
 * - reverseNumber(12) gọi reverseNumber(1, 432)
 * - reverseNumber(1) gọi reverseNumber(0, 4321)
 * - reverseNumber(0) trả về 4321
 */

#include <iostream>
using namespace std;

// Hàm đệ quy để đảo ngược số
int reverseNumber(int n, int reversed = 0)
{
  if (n == 0)
  {
    return reversed;
  }
  reversed = reversed * 10 + n % 10;
  return reverseNumber(n / 10, reversed);
}

int main()
{
  int n;
  cout << "Enter a positive integer: ";
  cin >> n;

  if (n < 0)
  {
    cout << "Please enter a positive integer." << endl;
  }
  else
  {
    cout << "The reverse of " << n << " is " << reverseNumber(n) << endl;
  }

  return 0;
}
