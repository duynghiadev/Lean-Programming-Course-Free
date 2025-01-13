/**
 * Nếu n là 5:
 *
 * - sum(5) trả về 5 + sum(4)
 * - sum(4) trả về 4 + sum(3)
 * - sum(3) trả về 3 + sum(2)
 * - sum(2) trả về 2 + sum(1)
 * - sum(1) trả về 1 (điều kiện dừng)
 *
 * - Tổng cộng: 5 + 4 + 3 + 2 + 1 = 15.
 */

#include <iostream>
using namespace std;

// Recursive function to calculate the sum
int sum(int n)
{
  if (n == 1)
  {
    return 1;
  }
  return n + sum(n - 1);
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
    cout << "The sum of numbers from 1 to " << n << " is " << sum(n) << endl;
  }

  return 0;
}
