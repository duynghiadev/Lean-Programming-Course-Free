/**
 * hãy nhờ chat-gpt giải thích bài này. Vì bài này rất dài và khó
 */

#include <iostream>
using namespace std;

// Hàm Ackermann đệ quy
int ackermann(int m, int n)
{
  if (m == 0)
  {
    return n + 1;
  }
  else if (m > 0 && n == 0)
  {
    return ackermann(m - 1, 1);
  }
  else if (m > 0 && n > 0)
  {
    return ackermann(m - 1, ackermann(m, n - 1));
  }
  return -1; // trường hợp không hợp lệ
}

int main()
{
  int m, n;

  // Kiểm tra Acker(1, 2)
  m = 1;
  n = 2;
  cout << "Acker(" << m << ", " << n << ") = " << ackermann(m, n) << endl;

  // Kiểm tra Acker(4, 5)
  m = 4;
  n = 5;
  cout << "Acker(" << m << ", " << n << ") = " << ackermann(m, n) << endl;

  return 0;
}
