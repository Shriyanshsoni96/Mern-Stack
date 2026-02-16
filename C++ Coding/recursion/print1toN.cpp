#include<iostream>
using namespace std;
// void pag(int n ,int e  )// this funtion is made me ismme mene do parameteer use kiyae he
// {   
 
//  if(n==e) return;
//  cout<<"  "<<n<<endl;
//  pag(n + 1,e);
 
// }
// int main (){ 
//     int y ,r;
//     cout<<"Enter the no of start ";
//     cin>>y;
//     cout<<"Enter the no of start ";
//     cin>>r;
//     pag(y,r); 
// }

// is code me sir ne same syntax
// se btaya he bs thoda likhne ka tarika alg he 
// void  print(int n )
// { 
//     if(n==0) return;// this is base case 
//  cout<<"  "<<n<<endl;//work for 
//  print(n-1);//call
// }
// int main (){
//     int y ;
//     cout<<"Ener the no ";
//     cin>>y;
//     print(y); 
// }
//  in this code we will change the way of recusion use 
void  print(int n )
{ 
    if(n==0) return; 
    print(n-1);
    cout<<"  "<<n<<endl;
}
int main ()
{
    int y ;
    cout<<"Enter the no ";
    cin>>y;
    print(y); 
}