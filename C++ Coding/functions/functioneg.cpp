#include<iostream>
using namespace std;
//int sum(int , int );// acceptable he ye  bhi 
int sum(int a , int b );
//int sum(int a, b); not acceptable 
int main (){
    int  num1, num2;
    cout<<"Enter the no 1 = ";
    cin>>num1;
    cout<<"Enter the no 2 = ";
    cin>>num2;
    cout<<"sum is = "<<sum( num1 , num2 );
    return 0;
}
int sum(int a , int b )
 {
    int c = a+b;
    return c;
 }