#include<iostream>
using namespace std;
int main ()
{
    int q,i , j ;
    cout<<"Enter the no of Rows ";
    cin>>q;
    i=1;
    while(i<=q)
       {int value = i ; 
                 j=1;
                while(j<=i)
            {
               cout<<"  "<<value ;
            value++;
             j++;
            }
    cout<<endl;
    i++;
    }



    int l ;
    cout<<"Enter the no of Rows ";
    cin>>l;
    i=1;
    while(i<=l)
       {
                 j=1;
                while(j<=i)
            {
               cout<<"  "<<i-j+1 ;//so the main formula is used is {i-j+1}
            
             j++;
            }
    cout<<endl;
    i++;
    }



//half inverted pattern using no sries by increasing value of i 

     int p;
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
               cout<<i<<"";                         
                     j++;               
            }
            
    cout<<endl;
    i++;
    }
//half inverted pattern using no serries 
       int m ;
   cout<<"Enter the value of row ";
   cin>>m;
    i=1 ;
  while (i<=m)
  {  int print = i-1;
   while(print )
  {cout<<" ";
  print--;}
   int space = m-i+1;
   while (space)
   {
       cout<<i;
      space--;
   }
  
cout<<endl;
i++;  
    } 

//print no with space in satrting series of element  
  
      int n ;
   cout<<"Enter the value of row ";
   cin>>n;
    i=1 ;
  while (i<=n)
  { 
    int print = i-1;
   while(print )
  {
   cout<<" ";
  print--;}
   int space = n-i+1;
int value = i ;
   while (space)
   {
       cout<<value;
       value++;
      space--;
   }
  
cout<<endl;
i++;  
    } 


    return 0;
} 
