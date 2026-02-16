#include<iostream>
using namespace std;
void printArray(int arr[], int size) {
    for (int i = 0; i <size; i++) 
    {
        cout<<(arr[i] + i);
    }
}

int main() {
    int arr[3] = {1, 2, 3};
    printArray(arr, 3);
    return 0;
}
