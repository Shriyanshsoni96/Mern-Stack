#include<iostream>
using namespace std;
#define max 5 
int  top = -1;
int stk[max];
int data;

void push()
{

    if(top ==max-1)
    {
        cout<<" Stack is Overflow can't insert  "<<endl;
        return;
    }     
   cout<<"Enter the element in Stack  "<<endl;
   cin>>data;
   
   if(top ==-1)
   {
     top=0;
    stk[top]=data;
   return ;
   }
   top++;
   stk[top]=data;
}

void display1 ()//this is for linear search 
{ int i ;
    if( top == -1)
    { 
        cout<<" Stack is Empty  no element in stack "<<endl;
    }  
    i = top ; 

    while(i>=0)
    {
        cout<<" " <<stk[i]<<endl;
        i--;
    }
  }

void pop()
{
    if(top ==-1)
    {
        cout<<"Stack is empty can't delete  "<<endl;
        return;
    }
    cout<<"Deleted Element in Stack is "<<stk[top]<<endl;

   top--; 
}


    

int main ()
{ 
    
    int n ;
    cout<<"Press 1 for insert element in Stack "<<endl;
    cout<<"Press 2 for delete element in Stack "<<endl;
    cout<<"Press 3 for dispaly Stack " <<endl;  
    cout<<"Press 0 for EXIT " <<endl;
    while (1)
    {
        cout<<"Enter the no ";
        cin>>n;

       switch(n)
       {
        case 1:push();break;
        case 2:pop();break;
        case 3:display1();break;
        case 0 :exit(0);
       }     

    }
} 