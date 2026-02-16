#include<iostream>
using namespace std;
#define max 5 
int rear, front ;
int que[max];

int data;

void insert()
{

    if(rear==max-1)
    {
        cout<<" Queue is Overflow  "<<endl;
        return;
    }     
   cout<<"Enter the element in Queue "<<endl;
   cin>>data;
   
   if(rear==-1)
   {
    front = rear = 0;
    que[rear] = data;
   return ;
   }
   rear++;
   que[rear]=data;
}

void display1 ()//this is for linear search 
{
    if( rear ==-1)
    { 
        cout<<" Queue is Empty "<<endl;
    }
  int i ;
    i = front ;

    while(i<=rear)
    {
        cout<<" " <<que[i]<<endl;
        i++;
    }
  }

void delet()
{
    if(front==-1)
    {
        cout<<"Queue is empty can't delete  "<<endl;
        return;
    }
    cout<<"Deleted Element in Queue is "<<que[front]<<endl;
   if(front==rear){
    rear=front = -1 ;
    return;
   }
   front++; 
}


    

int main ()
{ 
    rear=front=-1;
    int n ;
    cout<<"Press 1 for insert element in linear Queue "<<endl;
    cout<<"Press 2 for delete element in linear Queue "<<endl;
    cout<<"Press 3 for dispaly linear Queue " <<endl;  
  
    cout<<"Press 0 for EXIT " <<endl;
        while (1)
    { cout<<"Enter the no ";
    cin>>n;

       switch(n)
       {
        case 1:insert();break;
        case 2:delet();break;
        case 3:display1();break;
        
        case 0 :exit(0);
       }     

    }
} 