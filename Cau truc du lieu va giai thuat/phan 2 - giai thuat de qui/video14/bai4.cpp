#include <iostream>
using namespace std;

int logBase2(int n)
{
  int result = 0;
  while (n > 1)
  {
    n /= 2;
    result++;
  }
  return result;
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
    cout << "The integer value of log base 2 of " << n << " is " << logBase2(n) << endl;
  }

  return 0;
}
