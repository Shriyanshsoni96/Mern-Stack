#include<iostream>
using namespace std;
int main(){
int i,sum=0,n1,n2;
cout<<"enter start limit =";
cin>>n1;
cout<<"enter end limit = ";
cin>>n2;
cout<<"NO BETWEEN "<<n1<<" TO "<<n2<<" DIVISIBLE BY 9 ARE "<<endl;
for(i=n1;i<=n2;i++)
    {
        if(i%9==0)
        {
        cout<<i<<",";
        sum+=i;
        }

    }
cout<<endl<<"THE SUM IS "<<sum<<",";





}