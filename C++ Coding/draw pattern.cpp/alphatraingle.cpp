#include<iostream>
using namespace std;
int main()
{
 char alp='A';
 int i,j,n;
cout<<"entr the no";
cin>>n;
for(i=1;i<=n;++i)
    {
	  for(j=1;j<=i;++j)
	 {
	 cout<<" "<<alp;
	alp++;
	}
cout<<"\n";
alp ='A';
}
}