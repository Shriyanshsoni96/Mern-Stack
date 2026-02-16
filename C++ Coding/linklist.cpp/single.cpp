
#include<iostream>
#include<cstdlib>
#include<process.h>
using namespace std;
typedef struct list 
{
    int info;
    struct list*link; 
}node;
 node*start,*ptr,*loc,*pre;

void addf()
  { 
    int data;
    cout<<"Allocate memory for new node "<<endl;
    ptr=(node*)malloc(sizeof(node));
    cout<<"Enter the data in New Node :";
    cin>>data;
    ptr->info=data;
    if(start==NULL)
     {
    start=ptr;
    start->link=NULL;
    return;
     } 
    ptr->link=start;
    start=ptr;

}
void display ()// to display
    {   
    if(start==NULL)
    {
    cout<<"linked list is Empty(*khali he bhiya) "<<endl;
    return;
    }
    loc=start;
    while(loc!=NULL)
    {
     cout<<"--->"<<loc->info;
    loc = loc->link;
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
        start->link=NULL;
        return;
     }
    loc = start; 
    while(loc->link!=NULL)
    {
        loc = loc->link;
    }
        loc->link=ptr;
        //loc->link= ptr;
        ptr->link=NULL;
}

void delf() // start se delete hota he means last type wala node delete hota he  
{
    if(start==NULL)
    { 
       cout<<" list is Empty can not delete ";
        return;
    }
    cout<<endl<<"deleted node from 1st position is "<<start->info;
    if(start->link==NULL)
    {
        start==NULL;
        return;
    }
    start = start->link;
}

void dell()// last node delete hoga but jo first type he vo ;
{
 if(start==NULL)
{
   cout<<"list is Empty We cant delete node "<<endl;
    return;
}
if(start->link==NULL){
    cout<<" there is only 1 node to delete is "<<start->info;
    start=NULL;
    return;
}
 loc=start;
while(loc->link!=NULL){
    pre=loc;
    loc = loc->link;
}
cout<<" deleted node is "<<loc->info;
pre->link=NULL;

}

void search_node(){
    int item;
    if (start==NULL)
    {
        cout<<" list is empty can't search ";
        return;
    }    
    cout<<" Enter the search node"<<endl;
    cin>>item;
    loc = start;
    while(loc->info!=item && loc!=NULL)
    {
        loc = loc->link;
    }
    if(loc==NULL)
    {
        cout<<" we can not add new node ";
        return;
    }
    cout<<" Allocating memory "<<endl;
    ptr=(node*)malloc(sizeof(node));
    cout<<"Enter data into new node  "<<endl;
    cin>>ptr->info;
    ptr->link= loc->link; 
    loc->link=ptr;
 }
int main ()
{
    cout<<" press 1 for add node at first position "<<endl;
    cout<<" press 2 for add node at last position "<<endl;
    cout<<" press 3 for delete node at first position  "<<endl;
    cout<<" press 4 for delete node at last position  "<<endl;
    cout<<" press 5 for search node add node after that element  "<<endl;
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
         case 3 : delf();break;
         case 4 : dell();break;
         case 5 : search_node();break;
         case 6 : display();break;
         case 0 : exit(0);
         }
    }
}
