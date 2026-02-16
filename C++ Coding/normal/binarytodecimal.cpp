#include <iostream>
using namespace std;
int main()
{
  int binaryNumber, decimalNumber = 0, j = 1, remain;
	cout << " Input a binary number: ";
	cin>> binaryNumber;
  while (binaryNumber != 0) 
  {
   remain = binaryNumber % 10;
   decimalNumber = decimalNumber + remain * j;
   j = j * 2;
   binaryNumber = binaryNumber / 10;
  }
  cout<<" The decimal number: " << decimalNumber<<"\n";
} 