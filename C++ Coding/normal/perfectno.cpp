#include<iostream>
using namespace std;
int main()
{
int i,n,j,sum=0;
cout<<"Enter the no = ";
cin>>n;
for(i=1;i<=n;i++)
    { 
        for(j=1;j<n/2;j++)  
             { 
              if(j<i)
              {
                if (i % j==0)
                sum = sum+j;
             }

             } 
    if (sum ==i)
    {
        cout<<"\n"<<i;
    }
    
    sum=0;
      }         
}

