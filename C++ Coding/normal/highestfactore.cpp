#include<iostream>
using namespace std;
int main(){
int n,i;
cout<<"enter the no ";
cin>>n;
    int f= 1; // store karaunga highest factor
for( i=1;i<n;i++)
       {if(n%i==0) f = i;}
cout<<f ;
    
}