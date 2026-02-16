#include<iostream>
using  namespace std;
int main(){
int i,j,n;
cout<<"Enter the limit ";
cin>>i;
cout<<"to ";
cin>>n;
cout<<"Prime no btw "<<i <<"to "<<n<<endl;
int count=0;
while(i<=n)
    {
        int flag=0;
        
           for(j=2;j<=i/2;j++)
            { 
                if(i%j!=0)
                {
                flag=1;
                } 
            }
            if(flag==1)
            {cout<<i<<endl; 
             count++;}
      
        i++;
    }
     cout<<"count is "<<count;



}
