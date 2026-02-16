#include<iostream>
using namespace std;
int main (){
    int a =4;
    int b = 6;
    cout<<"This is the proff of truth table in logic gate "<<endl;
    cout<<" AND GATE a & b is "<<(a&b)<<endl;
    cout<<"  OR GATE a | b is "<<(a|b)<<endl;
    cout<<" NOT GATE   ~a  is"<<(~a)<<endl;
    cout<<" XOR GATE a ^ b is "<<(a^b)<<endl;
    
    cout<<(17>>2)<<endl;
    cout<<(17>>1)<<endl;
    cout<<(19>>2)<<endl;
    cout<<(20>>2)<<endl;
    return 0;
}