#include<stdio.h>
#include<process.h>
#include<stdlib.h>

typedef struct list
{
    int info;
    struct list *link;
}node;
node *start,*ptr,*loc,*pre;

void addf()//add at first position 
{
    int data ;
    //printf("Allocate Memory ");
    ptr=(node*)malloc(sizeof(node));
    printf("Enter the Data into no of node ");
    scanf("%d",&data);
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
    printf("linked list is Empty(khali he bhiaya)");
    return;
    }
loc=start;
while(loc!=NULL)
{
    printf(" %d, ",loc->info);
    loc = loc->link;
}
}


void addl()//to add node at last position ;
{
    int data;
    printf("Allocate memory for new  node ");
    ptr=(node*)malloc(sizeof(node));
    printf("Enter the data into new node  ");
    scanf("%d",&data);
    ptr->info=data;
    if(start==NULL)
     {
        start=ptr;
        start->link=NULL;
        return;
     }
    loc =start; 
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
        printf(" list is Empty can not delete ");
        return;
    }
    printf(" deleted node is %d",start->info);
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
    printf("list is Empty We cant delete node ");
    return;
}
if(start->link==NULL){
    printf("deleted node is %d",start->info);
    start=NULL;
    return;
}
 loc=start;
while(loc->link!=NULL){
    pre=loc;
    loc = loc->link;
}
printf(" deleted node is %d",loc->info);
pre->link=NULL;

}
void search_node(){
    int item;
    if (start==NULL)
    {
        printf(" list is empty can not add");
        return;
    }    
    printf(" Enter the search node");
    scanf("%d",&item);
    loc = start;
    while(loc->info!=item && loc!=NULL)
    {
        loc = loc->link;
    }
    if(loc==NULL)
    {
        printf(" we can not add new node ");
        return;
    }
    printf("allocate memory");
    ptr=(node*)malloc(sizeof(node));
    printf("Enter data into new node  ");
    scanf("%d",&ptr->info);
    ptr->link= loc->link; 
    loc->link=ptr;
 }
void main ()
{
    printf("\n press 1 for add first \n press 2 for display \n press 3 for add new node at last position \n press 0 for EXIT ");
    printf(" \n press 4 for delete node form start  \n press 5 for delted node from last  ");
    printf("\n press 6  for search node and then add");
    while(1)
    {   int n ;
        printf("\n enter the your choice ");
        scanf("%d",&n);
        switch(n)
        {
         case 1 : addf();break;
         case 2 : display();break;
         case 3 : addl();break;
         case 4 : delf();break;
         case 5 : dell();break;
         case 6 : search_node();break;
         case 0 : exit(0);
         
         }
    }
}
