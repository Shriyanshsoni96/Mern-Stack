#include<iostream>
using namespace std;
int print()
{
    cout<<"element found ";
}
int main ()
{
    int arry[]={1,3,4,48,566,46,74,45};
    int key ;
    cout<<"enter the key ";
    cin>>key;
    for(int i=0; i <7 ;i++ )
    {
        if(arry[i] == key)
        {
            print();
        }
        else 
        {
            cout<<"element not found ";
        }
    }
}