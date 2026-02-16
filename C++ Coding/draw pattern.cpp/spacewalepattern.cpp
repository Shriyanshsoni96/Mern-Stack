#include<iostream>
using namespace std;
int main ()
{
    int p,i,j;
    cout<<"Enter the no of Rows ";
    cin>>p;
    i=1;
    while(i<=p)
       {
         int space = p - i ;
               while(space){
                     cout<<" ";
                     space--;
               }
          j=1;
            while(j<=i)
            {     
               cout<<"*";                         
                     j++;               
            }
            
    cout<<endl;
    i++;
    }



      int k ;
   cout<<"Enter the value of row ";
   cin>>k;
  i =1;
  while (i<=k)
  {
   int print  = k-i+1;
   while (print )
   {
       cout<<" * ";
      print --;
   }
cout<<endl;
i++;  
  }


   int l ;
   cout<<"Enter the value of row ";
   cin>>l;
    i=1 ;
  while (i<=l)
  {  int print = i-1;
   while(print )
  {cout<<" ";
  print--;}
   int space = l-i+1;
   while (space)
   {
       cout<<"*";
      space--;
   }
  
cout<<endl;
i++;  
    }  
}
