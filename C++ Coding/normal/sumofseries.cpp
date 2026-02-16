#include<iostream>
using  namespace std;
int main(){
float i,n,t=9,sum=0;
cout<<"HOW MANY SERIES YOU WANT = ";
cin>>n;
for(i=1;i<=n;i++)
 {  
    sum = sum + t ;
    cout<<t<<"+";
    t=t*10+9;
    
  
 }
cout<<endl<<"the sum of the series = "<<sum;
}