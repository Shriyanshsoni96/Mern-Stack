#include<iostream>
using namespace std;

int arr[]={3,5,2,1,4,8,9,7,6};
int main()
{
    int n=sizeof(arr)/sizeof(arr[0]);
    int maxarea = 0;
    int left=0,right=n-1;
    while(left<right)
    {
        int height=min(arr[left],arr[right]);
        int width=right-left;
        cout<<right<<" - "<<left<<" = "<<width<<endl;
        cout<<" Height: "<<height<<endl;
        int area=height*width;
        maxarea= max(maxarea,area);
        cout<<" Area: "<<area<<endl;
        if(arr[left]<arr[right])
            left++;
        else
            right--;
    }
    cout << "Maximum area: " << maxarea << endl;
}