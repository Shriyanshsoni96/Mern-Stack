#include<iostream>
using namespace std;
int main (){
   
    int w,i,j;
    cout<<"Enter the no of Rows ";// this is  triangle 
    cin>>w;
    i=1;
 
    while(i<=w)
       {
         int space = w - i ;
               while(space){
                     cout<<"  ";
                     space--;
               }
          j=1;
            while(j<=i)
            {     
               cout<<j<<" ";                         
                    
                     j++;               
            }
            int start = i -1;
            while(start ){
               cout<<start<<" ";
               start--;
            }
    cout<<endl;
    i++;
    }
    //revrse paramid he 
     int l;
   cout<<"Enter the value of row ";
   cin>>l;
    i=1 ;
            while (i<=l)
            { 
            int space = i-1;
            while(space  )
         {
         cout<<"  ";
        space--;
        } 
      int count = 1;
      int print = l-i+1;
       while (print)
      {
                 cout<<count<<" ";
               count++;
               print--;  
               }
 int start = l-i;
           while(start)
        {
      cout<<start<<" ";
      start--;
       }
  
    cout<<endl;
       i++;  
    }  

    } 
   