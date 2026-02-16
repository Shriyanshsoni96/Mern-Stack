#include<iostream>
using  namespace std;
int main(){
    
    int i,n;
    cout<<"factorial Of ";
    cin>>n;
    int factorial=1;
    for(i=1;i<=n;i++)
        {
            factorial*=i;            
        }
            cout<<factorial;  
}