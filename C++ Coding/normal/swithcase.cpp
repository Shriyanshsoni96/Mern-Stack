#include<iostream>
using namespace std;
int main (){
    int month ;
    cout<<"Enter your month ";
    cin>>month;
    switch (month)
    {
        case 1:
        cout<<"your in january ";
        break;
        
        case 2:
        cout<<"your in Febrary ";
        break;
        
        case 3:
        cout<<"your in march  ";
        break;
        
        case 4:
        cout<<"your in april ";
        break;
        
        case 5:
        cout<<"your in may  ";
        break;
        
        case 6:
        cout<<"your in june ";
        break; 
        
        case 7:
        cout<<"your in july ";
        break; 
        
        case 8:
        cout<<"your in august  ";
        break; 
        
        case 9:
        cout<<"your in september ";
        break; 
        
        case 10:
        cout<<"your in october  ";
        break; 
        
        case 11:
        cout<<"your in november  ";
        break; 
        
        case 12:
        cout<<"your in  december ";
        break; 
        

    default:
    cout<<"this type month is not exist";
        break;
    }
    return 0;
}