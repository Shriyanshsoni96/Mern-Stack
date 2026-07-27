// when we store the function in the varible it store the refenrce of the function 
//The function has no name.
// The variable stores a reference to the function.

// FUNCTION EXPRESSION
// const greet = function(){
// console.log("hello");
// }
// greet();

// Anonymous Function
// Funciton without the name 

// const greet = function(){
// console.log("hello");
// }
// greet();

//Named Function

// const greet = function sayhello(){
// console.log("hello");
// }
// sayhello();// reference errror due to hoisting 
//greet();//:- hello

// when we try to call sayhello() it get reference error beacuse it only
//  know the greet variable when he calls then sayhello() works 


//Storiing the function in varible

//  const greet = function(){   
// console.log("hello");
// }
// greet();


// Storing the function in the object 
// const calculator={
//     add: function(a,b){
//         return a+b;
//     },
//     substract: function(a,b){
//         return a-b;
//     },
// };

// console.log(calculator.add(4,5));
// console.log(calculator.substract(4,5));


// Storing the function in the array
// const arr=[
//     function()
//     {
//         console.log("AAAAaaaaaaa");
//     },
//     function(){
//         console.log("bbbbbbbb");
//     }
// ];

// arr[0]();
// arr[1]();// function calling in array



// Return a function

// function outer(){
//     return function(){
//         console.log("inner of the function just like clousers ");
//     };
// }
// const lets=outer();
// lets();

// function add(a, b) {
//     return a + b;
// }

// function calculate(a, b, operation) {

//     return operation(a, b);

// }

// console.log(
//     calculate(10, 5, add)
// );

// using of the in build function "operation" it stores all the operations 