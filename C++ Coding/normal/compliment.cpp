#include<iostream>
using namespace std;
int main (){
int m ;
int mask = 0;

 cout<<"enter the no ";
cin>>m;
while(m!=0)
{
   
    mask  =  (mask<<1) | 1 ;
     m=  m >> 1;
}
int result = (~m) & mask;
cout<<result;
return result  ;

}
