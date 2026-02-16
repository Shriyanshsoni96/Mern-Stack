#include<iostream>
using namespace std;
int main()
{
int cp,sp;
cout<<"Enter the cost price :-";
cin>>cp; 
cout<<"Enter the selling price:-";
cin>>sp;
if (sp>cp)
    {
        cout<<"you are in profit "<<sp-cp;
    cout<<"\n wow!!";
    }
else if (sp<cp)
{
    cout<<"you are in lose"<<cp-sp;
}
else
{
    cout<<"no profit no lose";
}
return 0;
}