#include<iostream>
using namespace std;

int getMIN(int a[],int n )
{
    int min = INT16_MAX;
   for (int i = 0 ; i <n ; i ++)
   {
    if(a[i]<min)
    {
        min = a[i];
    }
   }
return min;
}
int getMAX(int a[],int n )
{
    int max = INT16_MIN;
   for (int i = 0 ; i < n ; i ++)
   {
    // maxi=max(maxi,a[i]);
    if(a[i]>max)
    {
        max = a[i];

    }
   }
return max;
}
int main (){
  //  int marks[] = {56,45,78,65,48}; 
          //  cout<<marks[0]<<endl;
          //  cout<<marks[1]<<endl;
          //  cout<<marks[2]<<endl;
          //  cout<<marks[3]<<endl;
          //  cout<<marks[4]<<endl;
    // int subject_marks [4];
        //subject_marks [0]=48;
        //subject_marks [1]=56;
        //subject_marks [2]=87;
        //subject_marks [3]=46;
         
    //cout<<"subject_marks ";
       
        //    cout<<subject_marks [0]<<endl;
        //    cout<<subject_marks [2]<<endl;
        //    cout<<subject_marks [3]<<endl;
        //    cout<<subject_marks [4]<<endl;
    
    // pointer in array means jo int marks he vhi hmare pointer ka address he 
    
//     int  * p= marks ;
//     cout<<"address of marks "<<&marks<<endl;
//     cout <<"adress of marks in the form of pointer "<<p<<endl;
    
//     cout<<"value of *p = "<<*p<<endl;
//     cout<<"value of *p+1 = "<<*(p+1)<<endl;
//     cout<<"value of *p+2 = "<<*(p+2)<<endl;
//     cout<<"value of *p+3 = "<<*(p+3)<<endl;
int size;
int a[100];
cout<<"Enter the size ";
cin>>size;
for (int i = 0 ; i<size ; i ++)
{
    cin>>a[i];
}
cout<<"Maximum value is "<<getMAX(a, size)<<endl;
cout<<"Minimum value is "<<getMIN(a, size);
 }