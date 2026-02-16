#include<iostream>
using namespace std;
#define max 5 
int rear, front ;
int que[max];
int Que[max];
int data;
void circular()
{
    if( front==0 && rear == max-1 || front == rear+1)
       {
        cout<<" Circular Queue is full "<<endl;
        return;
      }
    cout<<"Enter the Data in circular Queue"<<endl;
    cin>>data;                                  
    if(rear == -1)
    {
        front = rear= 0 ;
          Que[rear]=data;
          return;
    }    
    
    if(rear==max-1 )
    {
       rear=0;
       Que[rear]=data;
        return;
    }
     rear++;
     Que[rear]=data; 
}
void deletec()
{
  if(front==-1)
  {
    cout<<"Circular Queue is empty can't delete"<<endl;
  return;
   }
   
   cout<<"Deleted element in circular Queue is "<<Que[front]<<endl;
  if(front == rear )
  {
    front = rear = -1 ;
    return ;
  }
  if( front == max-1 )  
  {
   front=0;
  return ; 
  }   
   front++;
   }
   
void display2()
{ int i ;
    
                if( front  == -1)
                { 
                    cout<<" CIRCULAR Queue is Empty "<<endl;
                    return;
                }
            
        if(front <= rear  )
        {
            i = front ;
            while(i <=rear)
            {
                cout<<" " <<Que[i ]<<endl;
                i ++;
            }
        }
        
    else 
    {
    i = front ;
    while( i <= max -1  )
    {
        cout<<Que[front ]<<endl;
        i++;
    }
    front  = 0;
    while(front <=rear)
    {
        cout<<" " <<Que[front ]<<endl;
        front ++;
    }
   }

}
int main ()
{ 
    rear=front=-1;
    int n ;
  
    cout<<"Press 1 for insert element in circular Queue " <<endl;
    cout<<"Press 2 for delete element in  circular  Queue " <<endl;
    cout<<"Press 3 for dispaly circular Queue " <<endl;
    cout<<"Press 0 for EXIT " <<endl;
        while (1)
    { cout<<"Enter the no ";
    cin>>n;

       switch(n)
       {
        case 1:circular();break;
        case 2:deletec();break;
        case 3:display2();break;
        case 0 :exit(0);
       }     

    }
} 

