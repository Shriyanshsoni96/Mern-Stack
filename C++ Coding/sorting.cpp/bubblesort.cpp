
#include <iostream>
using namespace std;

// apmne adjcemt se check karo fir swap karo fir check karo fir adcent se check karo 
void bubbleSort(int arr[], int n)
{
    int i, j , temp ;
   
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n - i - 1; j++) {
      if ( arr[j] > arr[j + 1]) {
        int temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
// Function to print an array
void printArray(int arr[], int size)
{
    int i;
    for (i = 0; i < size; i++)
        cout << " " << arr[i];
}


int main()
{
 
    int i ;
    int N ;
    cout<<"Enter the sizee of array ";
    cin>>N;
       int arr[N];
    cout<<"Enter the no is arry ";
    for(i= 0 ; i < N ; i ++ )
    {
      cin>>arr[i];

    }
    
    bubbleSort(arr, N);
    cout << "Sorted array: \n";
    printArray(arr, N);
    return 0;
}
