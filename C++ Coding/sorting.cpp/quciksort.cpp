#include<iostream>
using namespace std; 
 
void swap(int* a, int* b) { 
    int temp = *a; 
    *a = *b; 
    *b = temp; 
} 
 
// Function to partition the array and return the pivot index 
int partition(int arr[], int low, int high) { 
    int pivot = arr[high];  // Choose the last element as the pivot 
    int i = low - 1;  // Index of the smaller element 
    for (int j = low; j < high; j++) { 
        // If the current element is smaller than or equal to the pivot 
        if (arr[j] <= pivot) { 
            i++; 
            // Swap arr[i] and arr[j] 
            swap(&arr[i], &arr[j]); 
        } 
    } 
    // Swap arr[i+1] and arr[high] (pivot) 
    swap(&arr[i + 1], &arr[high]); 
    return i + 1; 
} 
 
// Function to implement quick sort 
void quickSort(int arr[], int low, int high) { 
    if (low < high) { 
        // Partition the array and get the pivot index 
        int pi = partition(arr, low, high); 
 
        // Recursively sort the sub-arrays before and after the pivot 
        quickSort(arr, low, pi - 1); 
        quickSort(arr, pi + 1, high); 
    } 
} 
 
// Function to print an array 
void printArray(int arr[], int size) { 
    for (int i = 0; i < size; i++) { 
        cout<<a[i]; 
    } 
    cout<<endl;
} 
 
int main() { 
    int arr[] = {64, 34, 25, 12, 22, 11, 90}; 
    int n = sizeof(arr) / sizeof(arr[0]); 
    cout<<"Unsorted arrays is ";
    printArray(arr, n); 
 
    quickSort(arr, 0, n - 1); 
 
    cout<<"Sorted array is "; 
    printArray(arr, n); 
    return 0; 
} 
