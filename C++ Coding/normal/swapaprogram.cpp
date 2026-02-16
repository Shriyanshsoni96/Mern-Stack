#include<iostream>
using namespace std;
int main(){
    
    int x,y,temp;
    cout<<"PROGRAM FOR SWAP THE VALUES\n";
    cout<<"Enter the value of x and y";
    cin>>x>>y;
     temp = x ;
     x = y ;
     y = temp ;
     cout<<"\nAfter the swaping of values";
     cout<<"\nthe value of x is "<<x;
     cout<<"\nthe value of y is "<<y;
    return 0 ; 
}