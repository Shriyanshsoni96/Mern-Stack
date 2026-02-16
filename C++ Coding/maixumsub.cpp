#include<iostream>
using namespace std;

int main()
{
    int arr[]={-2,1,-3,4,-1,2,1,-5,4};
    int n=sizeof(arr)/sizeof(arr[0]);
   int left =0 ,right =n-1 ; 
   int csum= 0 ;
   int maxsum = 0;

    while (left<right)
    {     
        int i=left;
        while (i<=right)
        {
         csum+=arr[i];
        }
        if(left[arr]<right[arr])
        {
            left++;
        }
        else
        {
            right--;
        }
        maxsum= max(maxsum,csum);
        csum=0;
    }
    cout<<maxsum<<endl;
    }
    
