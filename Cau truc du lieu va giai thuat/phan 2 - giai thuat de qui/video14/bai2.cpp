/**
 * Nếu n là 123:
 *
 * - sumOfDigits(123) trả về (123 % 10) + sumOfDigits(12)
 * - (123 % 10) là 3, và sumOfDigits(12) sẽ tiếp tục được tính.
 * - sumOfDigits(12) trả về (12 % 10) + sumOfDigits(1)
 * - (12 % 10) là 2, và sumOfDigits(1) sẽ tiếp tục được tính.
 * - sumOfDigits(1) trả về (1 % 10) + sumOfDigits(0)
 * - (1 % 10) là 1, và sumOfDigits(0) trả về 0 (điều kiện dừng của đệ quy).
 * - Tổng cộng: 3 + 2 + 1 = 6.
 *
 * - Vì vậy, hàm sumOfDigits(123) sẽ trả về 6, là tổng các chữ số của 123.
 */

#include <iostream>
using namespace std;

// Hàm đệ quy để tính tổng các chữ số
int sumOfDigits(int n)
{
  if (n == 0)
  {
    return 0;
  }
  return (n % 10) + sumOfDigits(n / 10);
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
    cout << "The sum of the digits of " << n << " is " << sumOfDigits(n) << endl;
  }

  return 0;
}
