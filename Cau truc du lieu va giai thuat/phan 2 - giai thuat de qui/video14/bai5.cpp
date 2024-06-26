/**
 * Giải thích mã nguồn
 *
 * Hàm sumOfSquares:
 *
 * Hàm này tính tổng các bình phương từ 1 đến n.
 * - Nếu n bằng 1, hàm trả về 1. Đây là điều kiện dừng của đệ quy.
 * - Nếu n lớn hơn 1, hàm trả về n^2 cộng với kết quả của hàm sumOfSquares gọi với đối số là n - 1.
 * - Hàm main:
 * - Yêu cầu người dùng nhập một số nguyên dương.
 * - Nếu số nhập vào không phải là số dương, in ra thông báo yêu cầu nhập lại.
 * - Nếu số nhập vào là số dương, gọi hàm sumOfSquares để tính tổng các bình phương từ 1 đến số đó và in kết quả ra màn hình.
 *
 * - Ví dụ:
 *
 * - Nếu người dùng nhập vào n là 3:
 * - sumOfSquares(3) trả về 3^2 + sumOfSquares(2)
 * - sumOfSquares(2) trả về 2^2 + sumOfSquares(1)
 * - sumOfSquares(1) trả về 1 (điều kiện dừng)
 * - Tổng cộng: 3^2 + 2^2 + 1^2 = 9 + 4 + 1 = 14
 */

#include <iostream>
using namespace std;

// Hàm đệ quy để tính tổng S(n)
int sumOfSquares(int n)
{
  if (n == 1)
  {
    return 1;
  }
  return n * n + sumOfSquares(n - 1);
}

int main()
{
  int n;
  cout << "Enter a positive integer: ";
  cin >> n;

  if (n <= 0)
  {
    cout << "Please enter a positive integer." << endl;
  }
  else
  {
    cout << "The sum of squares from 1 to " << n << " is " << sumOfSquares(n) << endl;
  }

  return 0;
}
