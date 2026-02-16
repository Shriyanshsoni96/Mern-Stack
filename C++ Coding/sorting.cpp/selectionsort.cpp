#include<iostream>
using namespace std;
// pehle a[0] se compare karo fir jo bhi value a[0] se choto ho usko minmum
// bnado or fir new se uske aage ke index check karo or he to new minnium ko 
// ko swap krdo a[0] se or repeat same step ;

void selection( int arr[] , int n )
{
    int i , j , min, temp;
    for(i = 0 ; i < n ; i++ )
    {
        min = i ;
           for(j = i +1 ; j <n ; j++)
           {
            if(arr[j]<arr[min])
            {
                min = j ;
            }
           }
    if(arr[i]!= arr[min])
    {
       temp = arr[i];
       arr[i]= arr[min];
       arr[min]=temp;
    }   }}
int print(int arr[], int n )
{   cout<<"sorted arry is ";
    for(int i = 0 ; i <n ; i++)
    {
        cout<<arr[i]<<endl;
    }
}

int main(){
int arr[]={64,25,22,11,15};
int n = sizeof(arr)/sizeof(arr[0]);
selection(arr,n);

print(arr,n );
}