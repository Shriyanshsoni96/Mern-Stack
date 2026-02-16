 #include<iostream>
 using namespace std;
 int main (){
 int l,i ;
   cout<<"Enter the value of row ";
   cin>>l;
    i=1 ;
  while (i<=l)
  { 
    int count = 1;
   int print = l-i+1;
   while (print)
   {
       cout<<count<<" ";
      count++;
 print--;  
 }int space = i-1;
   while(space )
  {
   cout<<"* * ";
  space--;}
  
 int start = l-i+1;
 while(start)
 {
   cout<<start<<" ";
 start--;
 }
 
cout<<endl;
i++;  
    }  

    } 