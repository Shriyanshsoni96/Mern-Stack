#include<iostream>
using namespace std;
int main (){
    int n ;
    cout<<" Enter your number  ";
    cin>>n;
    if ((n%3==0)&&(n%5==0)) cout<<"fizzbuzz";
    if ((n%3==0)&&(n%5!=0)) cout<<"fizz";
    if ((n%5==0)&&(n%3!=0)) cout<<"buzz";
    if ((n%3!=0)&&(n%5!=0)) cout<<" "<<n;
    
}