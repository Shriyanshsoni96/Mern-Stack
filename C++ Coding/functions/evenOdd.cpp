#include<iostream>
using namespace std;
bool isEven( int a )
{ //for even 1 
// for odd 0 ;'
    if( a & 1 )
    {
        return 0;
        }
    else{
        return 1;
    }
}
int main()
{ 
    int num;
    cin>>num;
    if(isEven(num))
{cout<<"no is even ";
}
else
{
    cout<<"no is odd";

}
}