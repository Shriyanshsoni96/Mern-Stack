#include<iostream>
using namespace std;
int binarysort(int a[],int size,int key){
int start=0;
int end=size-1;
int mid = start+(end-start)/2; 
//agr int ka vaalue 2ki power31 se jyada
// he to ye use nhi krenge mid=(start+end)/2;
while(start<=end)
{
    if(a[mid]==key)
    {
        return mid;
    }
    if(a[mid]<key)
    {
        start=mid+1;
        }
    else 
    {
     end=mid-1;
    } 
   mid = start+(end-start)/2; 
    }
    return -1 ;
}
int main(){
    int a[]={ 2,4,5,12,34,46,66 };
     int n= sizeof(a)/sizeof(a[1]);
   cout<<" Index of 4 is "<<binarysort(a,n,4);
}