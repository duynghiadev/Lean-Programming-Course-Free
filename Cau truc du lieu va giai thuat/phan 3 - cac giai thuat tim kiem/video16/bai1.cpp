#include <iostream>
#include <stdlib.h>
#include <time.h>

using namespace std;

void NhapMang(int M[], int n);
void XuatMang(int M[], int n);
int LinearSearch(int M[], int n, int x);

int main(int argc, char **argv)
{
  int n = 7;
  int M[n];
  cout << "Mảng sau khi nhập ngẫu nhiên là: \n";
  XuatMang(M, n);

  int x;
  cout << "\nMời bạn nhập vào 1 số: ";
  cin >> x;
  int kq = LinearSearch(M, n, x);

  if (kq == -1)
    cout << "Không thấy " << x << " trong mảng";
  else
    cout << "Thấy " << x << " tại vị trí " << kq;
  return 0;
}

void NhapMang(int M[], int n)
{
  srand(time(NULL));

  for (int i = 0; i < n; i++)
  {
    M[i] = rand() % 100;
  }
}

void XuatMang(int M[], int n)
{
  for (int i = 0; i < n; i++)
  {
    cout << M[i] << "\t";
  }
}

int LinearSearch(int M[], int n, int x)
{
  for (int i = 0; i < n; i++)
  {
    if (M[i] == x)
      return i;
  }
  return -1;
}