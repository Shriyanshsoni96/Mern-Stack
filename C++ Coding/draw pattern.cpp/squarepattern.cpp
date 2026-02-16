#include<iostream>
using namespace std;
int main (){

int side,row,col;
cout<<"INPUT THE NO FOR SIDE =";
cin>>side;
for (row = 1; row <= side; row++)
    {
        for(col=1;col<=side;col++)
            {   
                cout<<"# ";
            }   
            cout<<"\n";
    }
}