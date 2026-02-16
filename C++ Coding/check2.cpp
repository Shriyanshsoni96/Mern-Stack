#include<iostream>
using namespace std;
int unique(int a[],int n )
{
  int i;
  int ans = 0 ;

  for(i=0;i<n;i++)
  {
    ans= (ans^a[i]);
  }
return ans;
}
int main(){
  int a[]={12,15,48,87,15,48,87};
  int n= sizeof(a)/sizeof(a[1]);
 cout<<unique(a,n);
 // alter(a,n);
  //print(a,n);
}