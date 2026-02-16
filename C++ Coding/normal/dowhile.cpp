#include<iostream>
using namespace std;
int main (){
   
   int n,sum=0,digit;
   cout<<"Enter the no ";
    cin>>n;
    digit = 2;
     do
     {
        sum = sum + digit;
        digit = digit + 2;
        cout <<digit<<endl;
     
     } while (digit<n);

     cout <<"2+4........=  "<<n;
     cout<<" sum = "<<sum <<endl;

    
    
    
    
    
    
    return 0;
}