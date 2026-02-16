#include<iostream>
#include<cstdlib>
#include<process.h>
using namespace std ;
typedef struct list
{
    struct list*prev;
    int info ;
    struct list*next;

}node;
node* start ,*loc , *ptr ;

void addf()
{
 int data ;
 cout<<" Allocating memory ";
 ptr= (node*)malloc(sizeof(node));
cout<<" Enter the data into new node ";
cin>>data;
ptr->info=data;
if(start == NULL)
{
    ptr->next=NULL;
    ptr->prev= NULL;
    start = ptr ;
    return;
}

ptr->prev= NULL;
ptr->next = start ;
start = ptr ;
}


void display ()// to display
{   
    if(start==NULL)
    {
    cout<<"linked list is Empty(*khali he bhiya) "<<endl;
    return;
    }
    loc=start;
    while(loc != NULL)
    {
     cout<<"--->"<<loc->info;
     loc = loc->next;
    }
    }

   void addl()//to add node at last position ;
{
    int data;
    cout<<"Allocate memory for new node "<<endl;
    ptr=(node*)malloc(sizeof(node));
   cout<<" Enter the data into new node from last position ";
    cin>>data;
    ptr->info=data;
    if(start==NULL)
     {
        start=ptr;
        start->prev=NULL;
        start->next=NULL;
        return;
     }
    loc = start; 
    while(loc->next!=NULL)
    {
        loc = loc->next;
    }
        loc->next=ptr;
        //loc->link= ptr;
        ptr->next=NULL;
}
int main ()
{
    cout<<" press 1 for add node at first position "<<endl;
     cout<<" press 2 for add node at last position "<<endl;
    // cout<<" press 3 for delete node at first position  "<<endl;
    // cout<<" press 4 for delete node at last position  "<<endl;
    // cout<<" press 5 for search node add node after that element  "<<endl;
    cout<<" press 6 for display single linklist "<<endl;
    cout<<" press 0 for EXIT "<<endl;
    while(1)
    {   int n ;
        cout<<endl<<"Enter your choice "<<endl;
        cin>>n;
        switch(n)
        {
         case 1 : addf();break;
         case 2 : addl();break;
        //  case 3 : delf();break;
        //  case 4 : dell();break;
        //  case 5 : search_node();break;
         case 6 : display();break;
         case 0 : exit(0);
         }
    }
}
