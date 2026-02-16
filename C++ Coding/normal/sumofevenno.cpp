#include<iostream>
using  namespace std;
int main(){
 int i,n,sum=0;
 cout<<"ENTER THE NO = ";
 cin>>n;
 cout<<"NATURAL EVEN NO ARE = ";
 i=1;
 int count=0;
 while(i<=n)
   {
        if(i%2==0)
        {
            cout<<i<<",";
            count++;
            sum=sum+i;
        }
    i++;
   }
   cout<<endl<<"SUM OF NATURAL EVEN NO ARE = "<<sum<<endl;
   cout<<"TOTAL NATURAL NO ARE = "<<count;

}
