
// arrays ko alternate me swap krna he 
#include<iostream>
using namespace std;
void alter(int a[],int size )
{
  for(int i = 0 ; i < size ; i+=2)
  {
    if(i+1 < size)
    {
    swap(a[i],a[i+1]);
  }
 }
 return ;
}
void print(int a[] ,int size){
    for(int i = 0 ; i < size; i++)
  {
    cout<<a[i]<<" ";
  }
  return ;
}

// to find dublicate element in  arrays 
void dublicate(int a[], int n ){
int i , j ;
i=0;
int flag = 0 ;
while(i<=n)
{
  j=i+1;
  while(j<=n)
  {
    if(a[i]==a[j])
    {
      cout<<" Doublicate element are "<<a[i]<<","<<a[j]; 
      flag= 1 ;
      }
      
  j++;
  }
i++;
}
if(flag == 0 )
{
  cout<<" No dublicate element found ";
}
}

int unique(int a[],int n )
{
  int i;
  int ans = 0 ;

  for(i=0;i<n;i++)
  {
    ans= ans^a[i];
  }
return ans;
}

int main()
{
  int a[]={12,23,34,45,74,67,87,90};
  int n= sizeof(a)/sizeof(a[1]);
  dublicate(a,n);
 //cout<<unique(a,n)<<" "<<endl;
 // alter(a,n);
  //print(a,n);
}