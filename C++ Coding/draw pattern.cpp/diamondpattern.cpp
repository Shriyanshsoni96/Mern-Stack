#include<iostream>
using namespace std;
int main(){
int i,j,row;
cout<<"Enter any Row";
cin>>row;
for(i=1;i<=row;i++)
{
    for(j=1;j<=1;j++)
        {
            cout<<"#";
        } 
        
    cout<<"\n";
    for(i=row;i>0;i--)
        {
            for(j=1;j<=i;j++)
            {
                cout<<"#";
            }
            cout<<"\n";
        }

}
}