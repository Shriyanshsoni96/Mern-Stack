#include<iostream>
using  namespace std;
int main(){
int n,i,num_1=0,num_2=1,sum=0;
cout<<"Enter the no of terms ";
cin>>n;
cout<<"FABONACCI SERIES"<<endl;
for(i=1;i<=n;i++)
    {
        if(i==1)
        {
        cout<<num_1<<",";
        continue;
        }
        
        if(i==2)
        {
            cout<<num_2<<",";
            continue;
        }
        sum=num_1+num_2;
        num_1 = num_2;
        num_2=sum;

        cout<<sum<<",";

        


    }














}