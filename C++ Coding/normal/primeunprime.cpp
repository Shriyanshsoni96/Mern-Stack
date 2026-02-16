#include<iostream>
using namespace std;
int main (){
int n,i,flag;
cout<<"Enter the no:";
cin>>n; 
flag=true;
for (  i=2;  i<n/2; i++)
{
    if (n%i==0)
    {
        flag=false;
        break;
    }
}
if(flag==true)
cout<<" PRIME NO ";
else cout<<"UNPRIME NO ";
} 
