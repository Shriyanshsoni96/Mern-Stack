#include<stdio.h>
#include<malloc.h>
#include<stdlib.h>

typedef struct list {
     int info;
     struct list *link;
}node;
node *start, *loc, *ptr, *prev;

void add_first() {
     int data;
     printf("\nAllocate memory for new node..!");
     ptr = (node*)malloc(sizeof(node));
     printf("\nEnter data : ");
     scanf("%d", &data);
     ptr -> info = data;
     ptr -> link = NULL;

     if(start == NULL) {
          start = ptr;
          ptr -> link = start;
          return;
     }
     loc = start;
     while(loc -> link != start) {
          loc = loc -> link;
     }
     loc -> link = ptr;
     ptr -> link = start;
     start = ptr;
}

void add_last() {
     int data;
     printf("\n Allocate memory for new node");
     ptr = (node*)malloc(sizeof(node));
     printf("\n Enter data : ");
     scanf("%d", &data);
     ptr -> info = data;
     if (start == NULL) {
          start = ptr;
          ptr -> link = start;
          return;
     }

     loc = start;
     while(loc -> link != start) {
          loc = loc -> link; 
     }
     loc -> link = ptr;
     ptr -> link = start;
}

void delete_first() {
     if(start == NULL){
          printf("\nCircular Link List is empty, cann't delete node..!");
          return;
     }
     printf("\nTo be deleted node is %d" , start -> info);
     if(start -> link == start) {
          start = NULL;
          return;
     }
     loc = start;
     while(loc -> link != start){
          loc = loc -> link;
     }
     loc->link = start->link;
     start = start->link;
}

void delete_last() {
     if(start == NULL){
          printf("\nCircular Link List is empty, cann't delete node from anywhere..!");
          return;
     }
     if(start -> link == start) {
          printf("\nTo be deleted node is %d" , start -> info);
          start = NULL;
          return;
     }
     loc = start;
     while(loc -> link != start) {
          prev=loc;
          loc=loc->link;
     }
     printf("\nDeleted node is: %d",loc->info);
     prev -> link = start;

}

void display() {
     if(start == NULL) {
          printf("\nCircular Link list is empty, cann't display..!");
          return;
     }
     printf("Start->");
     loc = start;
     do{
     printf("[%d]->", loc->info);
     loc = loc -> link;
     }while(loc != start);
     
     if(loc == start) {
          printf("<-Start");
     }
}

int main() {
     int n;
     printf("\n \t \t  Menu..");
     printf("\n 1 \t : \t  Add First ");
     printf("\n 2 \t : \t  Add Last ");     
     printf("\n 3 \t : \t  Delete First ");     
     printf("\n 4 \t : \t  Delete Last ");     
     printf("\n 5 \t : \t  Display ");     
     printf("\n 0 \t : \t  EXIT ");     

          while(1) {
          printf("\n Enter your choice : ");
          scanf("%d", &n);

          switch (n) {
               case 1: add_first(); break;
               case 2: add_last(); break;
               case 3: delete_first(); break;
               case 4: delete_last(); break;
               case 5: display(); break;
               case 0: exit(0);
          }
     }
     return 0;
}