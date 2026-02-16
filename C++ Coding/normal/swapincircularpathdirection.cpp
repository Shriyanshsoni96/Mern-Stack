#include<iostream>46
using namespace std; 
int main (){
    float x,y,z,temp;
    cout<<"progaram for swap the values in circular direction\n";

    cout<<"Enter the values of x = ";
    cin>>x;

    cout<<"Enter the values of y = ";
    cin>>y;

    cout<<"Enter the values of z = ";
    cin>>z;
    temp = x;
    x=y;
    y=z;
    z = temp;
    cout <<"After the swaping of values in  circular direction ";
    cout <<"\nAfter the swaping of value of x is = "<<x;
    cout <<"\nAfter the swaping of value of y is = "<<y;
    cout <<"\nAfter the swaping of value of z is = "<<z;


return 0 ;
}