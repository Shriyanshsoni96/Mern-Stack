#include<iostream>
using namespace std;
int main(){
int i , j ;
int a[5],b[5];
cout<<"Enter the elements in arrays ";
for(i = 0 ; i<5 ; i ++)
{
    cin>>a[i];
}

   for (i = 4; i>=0; i--)
   {int j = 5-1-i;
    b[i]=a[j];
   }
   cout<<"reversed order elements are ";
   for(i=0;i<5;i++)
   {
    cout<<b[i]<<endl;
   }
}
