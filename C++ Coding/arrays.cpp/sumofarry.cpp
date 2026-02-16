// sum of an arrays 
#include<iostream>
using namespace std;
int sum(int arr[],int m)
{
    int sum = 0 ;
    for(int i = 0 ; i <m ; i++ )
    { 
        sum = arr[i]+sum;
    }
     cout<<"SUM of the array is "<<sum;
}
int main ()
{
    int n ;
    cout<<" Enter the size ";
    cin>>n;
    int arr[n];
    cout<<"Enter the element in Arrays ";
    for(int i = 0 ; i <n ; i++)
    {
        cin>>arr[i];
    }
   sum(arr,n);
}