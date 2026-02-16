#include<iostream>
using namespace std;

    
 struct student 
{
    int roll_no;
    int age;
    char sex;
    float weight ;
    float height ;
};

int main ()
{
    
   struct student:{985,12,M,55.2,5.10};
    cout<<"enter the roll no  "<<student.roll_no;
    cout<<"enter the age   "<<student.age ;
    cout<<"enter the sex "<<student.sex;
    cout<<"enter the weight "<<student.weight;
    cout<<"enter the height "<<student.height;



    return 0;
}