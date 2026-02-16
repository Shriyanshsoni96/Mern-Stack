#include<iostream>
using namespace std;
int main ()
{
    int q,i , j ;
    cout<<"Enter the no of Rows ";
    cin>>q;
    
    i=1;

    while(i<=q)
       {
                 j=1;
                while(j<=q)
            {
               cout<<"  "<<char(i+64);
            
             j++;
            }
    cout<<endl;
    i++;
    }
    //same question with using arrys 
      int k ;
    cout<<"Enter the no of Rows ";
    cin>>k;
    i=1;
    while(i<=k)
       {char alpha='A'+i-1;
                 j=1;
                while(j<=k)
            {
               cout<<"  "<<alpha;
             j++;
            }
    cout<<endl;
    i++;
    }
  

//alphabet tirangle he with aArrys 

    {
 char alp='A';
 int n;
cout<<" Enter the no " ;
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
//perint alpabet in serial no or given no 
   int a ;
    cout<<"Enter the no of Rows ";
    cin>>a;
    
    i=1;

    while(i<=a)
       {
                 j=1;
                while(j<=a)
            {
               cout<<"  "<<char(j+64);
            
             j++;
            }
    cout<<endl;
    i++;
    }
  
  int b ;
    cout<<"Enter the no of Rows ";
    cin>>b;
    
    i=1;
char alpha ='A';
    while(i<=b)
       {
                 j=1;
                while(j<=b)
            {
               cout<<"  "<<alpha++;
            
             j++;
            }
    cout<<endl;
    i++;
    }
 //start from starting series 
   int d;
    cout<<"Enter the no of Rows ";
    cin>>d;
    
    i=1;
    while(i<=d)
       {
                 j=1;
                while(j<=i)
            {char alpha ='A'+i+j-2;
               cout<<"  "<<alpha;
            
             j++;
            }
    cout<<endl;
    i++;
    }
  
  //start from last series 
  int e;
    cout<<"Enter the no of Rows ";
    cin>>e;
    i=1;
    while(i<=e)
       {
          char alpha ='A'+e-i;       
          j=1; 
            while(j<=i)
               {
            cout<<"  "<<alpha;
            alpha++;
            j++;              
               }        
    cout<<endl;
    i++;
    }
  
    return 0;
} 