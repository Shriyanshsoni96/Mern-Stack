#include <iostream>
 using namespace std; 
int  main ()
 { 
    int n1,n2,n3,n4,n5,total;   
  float percent;  
   cout<<"enter marks of basic computer engineering:";    
    cin>>n1; 
    cout<<"enter the marks of problem solving in c++:";
         cin>>n2; 
    cout<<"enter marks of engineering mathematics:"; 
        cin>>n3; 
    cout<<"enter marks of communication skills:"; 
        cin>>n4; 
    cout<<"enter marks of environmental science:";   
      cin>>n5; 
    total=n1+n2+n3+n4+n5; 
    cout<<"total number is "<<total<<" out of 500.\n";   
      percent=total/5; 
    cout<< "percentage is "<<percent<<"%";   
     
} 
