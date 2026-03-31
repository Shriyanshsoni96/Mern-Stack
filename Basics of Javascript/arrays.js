// arrays are a data structure that can hold multiple values of different types. 
// its an literal that can hold multiple values and is denoted by square brackets [] and the values are separated by commas.
// They are used to store a collection of data and can be accessed using an index. 
// In JavaScript, arrays are objects and have properties and methods that can be used to manipulate the array.
// in this arrays can hold any type of data like numbers, strings, objects, etc. and they can also hold other arrays as well.
// let arr=["apple","banana","grapes","orange","mango"];
// console.log(arr);   
// console.log(arr[0]); // Output: apple
// console.log(arr[1]); // Output: banana
// console.log(arr[2]); // Output: grapes
// console.log(arr[3]); // Output: orange
// console.log(arr[4]); // Output: mango

// console.log(arr.length); // Output: 5
// console.log(typeof(arr)); // Output: object

// it means arrays are also objects in javascript and they have properties and methods just like objects.
// when we traverse an array we can access its elements using index and we can also use its properties and methods to manipulate the array.

// we can also create an array using the Array constructor function.
// let arr2 = new Array("apple","banana","grapes","orange","mango");
// console.log(arr2); // Output: [ 'apple', 'banana', 'grapes', 'orange', 'mango' ]
// console.log(arr2[0]); // Output: apple
// console.log(arr2[1]);       
// console.log(arr2[2]); // Output: grapes
// console.log(arr2[3]); // Output: orange
// console.log(arr2[4]); // Output: mango
// console.log(arr2.length); // Output: 5
// console.log(typeof(arr2)); // Output: object
// // build in functions in arrays
// arr2.push("kiwi"); // adds a new element to the end of the array
// console.log(arr2); // Output: [ 'apple', 'banana', 'grapes', 'orange', 'mango', 'kiwi' ]

// arr2.pop(); // removes the last element of the array
// console.log(arr2); // Output: [ 'apple', 'banana', 'grapes', 'orange', 'mango' ]

// arr2.unshift("kiwi"); // adds a new element to the beginning of the array
// console.log(arr2); // Output: [ 'kiwi', 'apple', 'banana', 'grapes', 'orange', 'mango' ]

// arr2.shift(); // removes the first element of the array
// console.log(arr2); // Output: [ 'apple', 'banana', 'grapes', 'orange', 'mango' ]

// arr2.slice(1,3); // removes elements from the array and returns the removed elements
// console.log(arr2); // Output: [ 'apple', 'banana', 'grapes', 'orange', 'mango' ]
// // console.log(arr2.slice(1,3)); // Output: [ 'banana', 'grapes' ]

// arr2.splice(1,3,'kiwi'); // removes elements from the array and returns the removed elements
// console.log(arr2); // Output: [ 'apple', 'kiwi', 'orange', 'mango' ]

// let arr3 = [10,20,30,40,50];
// // arr3 = arr3.map((number)=>{
// //     return number*number;
// // })
// // console.log(arr3); // Output: [ 1, 4, 9, 16, 25 ]


// arr3= arr3.map((number, index)=>{
//     console.log(number); // Output: 10 20 30 40 50
//     console.log(index); // Output: 0 1 2 3 4
// })

// in the above code we have used the map method to iterate through the array and 
// return a new array with the squared values of the original array.
// using the map method we can create a new array by applying a function to each element of the original array.
// the map method takes a callback function as an argument and applies it to each element of the array and returns a new array with the results.

// FILTER METHOD
// the filter method is used to create a new array with all elements that pass the test implemented by the provided function.
// let arr4 = [10,20,30,40,50];
// arr4 = arr4.filter((number)=>{
//     return number > 20;
// })
// console.log(arr4); // Output: [ 30, 40, 50 ]

// let arr4 = [12,23,334,56,67,78,889,90];
// let ans = arr4.filter((number)=>
// {
//     return number%2===0;
// })
// console.log(ans); // Output: [ 12, 334, 56, 78, 90 ]

// let array = [1,"true", "hello ", "i am ", 23 ,"arra" ];
// let ans= array.filter((element)=>{
//     return typeof(element) === "string";
// });
// in the above code we have used the filter method to create a new array with all the string elements of the original array.
// console.log(ans); // Output: [ 'true', 'hello ', 'i am ', 'arra' ]

// REDUCE METHOD
// the reduce method is used to execute a reducer function on each element of the array, resulting in a single output value.
// let arr5 = [1,2,3,4,5];
// let ans = arr5.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// })
// console.log(ans); // Output: 15

// Sort method 
// the sort method is used to sort the elements of an array in place and returns the sorted array.
// let arr6 = [5,4,3,2,1];
// arr6.sort();
// console.log(arr6); // Output: [ 1, 2, 3, 4, 5 ]

// if we want to sort the array in descending order we can use the sort method with a compare function.
// let arr6 = [1,5,4,3,2];
// arr6.sort((a,b)=>{
//     return b-a;
// })
// console.log(arr6); // Output: [ 5, 4, 3, 2, 1 ]

// FIND METHOD
// the find method is used to return the value of the first element in the array that satisfies the provided testing function.
// let arr7 = [1,2,3,4,5];
// let ans = arr7.find((number)=>{
//     return number > 3;
// })
// console.log(ans); // Output: 4

// FOR EACH METHOD
// the forEach method is used to execute a provided function once for each array element.
// let arr8 = [10,20,30,40,50];
// arr8.forEach((number, index)=>{
//     console.log("NUMBER: ", number, "INDEX: "  , index); // Output: 10 0, 20 1, 30 2, 40 3, 50 4
// })  

//FOR IN LOOP
// the for in loop is used to iterate over the properties of an object.
// let arr9 = [10,20,30,40,50];
// for(let index in arr9){
//     console.log("NUMBER: ", arr9[index], "INDEX: "  , index); // Output: 10 0, 20 1, 30 2, 40 3, 50 4
// }

// let person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }
// for(let key in person){
//     console.log("KEY: ", key, "VALUE: "  , person[key]); // Output: name John, age 30, city New York
// }

// FOR OF LOOP
// the for of loop is used to iterate over the values of an iterable object.
// let na ="hemant malviya ";
// for(let val of na){
//     console.log(val); // Output: h e m a n t   m a l v i y a
// }