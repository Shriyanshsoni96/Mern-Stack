#include<iostream>
using namespace std;
int main (){
    int m,h, n , i ,j ; 
    cout<<"Enter the no ";
    cin>>n;
    for(i=n;i>=1;i--)
    {
        for(j=i;j>=1;j--)
        {
            cout<<" * ";
        }
        
        cout<<endl;
    }
cout<<endl;
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=i;j++)
        {
            cout<<" * ";
            }
    cout<<endl;
    }




    //ye reverse order me no print hue he starting then starting triangle pattern me ;
    cout<<" Enter the no ";
    cin>>m;
    for( i=m;i>=1;i--)
    {
        for(j=m;j>=i;j--)
        {
            cout<<"  "<<j;
        }
    cout<<endl;
    }

    //serial no means new line start se number print hue he 

     cout<<"enter the no ";
    cin>>h;
    for(i=1;i<=h;i++)
    {
        for (j = 1; j <= i; j++)
        {
            cout<<" "<<j;
        }
   cout<<endl;     
    }
  
   //Odd no print hue he triangular pattern me 
   int  p;
    cout<<" Enter the no ";
    cin>>p;
    for( i =1;i<=p;i++)
    { 
        for(j=1;j<=2*i-1;j+=2)
        {
            cout<<"  "<<j;
        }
    cout<<endl;
    }
 
 //same row same no print  hue he 
 
    int o ;
    cout<<"Enter the no of Rows ";
    cin>>o;
    i=1;
    while(i<=o)
       {
                 j=1;
                while(j<=i)
            {
               cout<<i;
             j++;
            }
    cout<<endl;
    i++;
    }
   


    //serial no me no print hue he ;
   
      int l;
    cout<<"Enter the no of Rows ";
    cin>>l;
    int count=1;
    i=1;
    while(i<=l)
       {
                 j=1;
                while(j<=i)
            {
               cout<<count<<"  ";
            
             j++;
         count++;   }
    cout<<endl;
    i++;
    }
    return 0;
}