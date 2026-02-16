#include<iostream>
using namespace std;
int main (){
    long n ;
   cout<<"enter the no ";
    cin>>n;
    long  reverse = 0;
    while(n!=0){
       long digit = (n %10);
         reverse = (reverse*10)+digit ;
        n = n / 10;
    }
    cout<<reverse;
//ye universal he isme starting range last range tak reverse ho skyte he 

  cout<<"Enter the no ";
  n ;
 cin>>n;
 int ans = 0 ;
 while(n!=0)
 {
int digit = n % 10;
if((ans>INT32_MAX)||(ans<INT32_MIN))
{
return 0;
}
ans = (ans *10)+digit;
n=n/10;
} 
cout<<ans;
return ans;
}