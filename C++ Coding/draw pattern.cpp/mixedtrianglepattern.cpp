#include<iostream>
using namespace std;
int main (){
    int i,j,n;
    cout<<"Enter the no ";
    cin>>n;
    for(i=1;i<=n;i++)
    {
        if(i%2==0) 
        {
            for (j = 1; j <= i; j++)
        {
            cout<<char(j+64);
        }
        }
        else
        {
             for (j = 1; j <= i; j++)
        {
            cout<<j;
        }
        }
        cout<<endl;     
    }
    return 0;
}