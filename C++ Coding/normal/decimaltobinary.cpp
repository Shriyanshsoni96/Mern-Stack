#include<iostream>
using namespace std;
int main(){
    int a[100],num,i,j,temp;
    cout<<"\n enter any decimal number ";
    cin>>num;
    temp=num;
    i=0;
    while(temp)
     {
     a[i]=temp %2;
     temp=temp/2;
     i++;
     }
     cout<<"given decimal number is " <<num << " binary converssion is \n ";
     for(j=i-1;j>=0;j--)
      cout<<" "<<a[j];

}