
let a = 12;
let b = a ; 
 a= a+2 ; 
console.log(a);
let n = null;
console.log(n); 
let u1 = Symbol("UID");
let u2 = Symbol("UID");

// var 
// window me add hota he 
// functions scoped hota he 
// aap firse add kr skte ho same name sev  aur ye error bhi nhi dega 
// var a = 12;/     

// let  
// cannot be redeclare
// block scoped hota he
// let b =12;  

// const 
// const c = 12; 
// things which i know that i cannot change further
// in const me aapko value deni hi padegi aur uske baad aap usko change nhi kr skte ho 
// you cannot reassign the value of a const variable, but if the const variable is an object or an array, you can modify its properties or elements. 
  
//Hoisting
// var a = 12;
//it means that a variable can be used before declaration and initialization but uska value undefined hoga
//isko ye 2 part me divide kr deta he ek declaration aur ek initialization me
// declaration part ko hoisting kehte he 
// initialization part ko assignment kehte he
// console.log(a); //undefined
// var a = 12; // declaration and initialization
// let a= 12;

//DATA TYPES IN JAVASCRIPT
// 1. Primitive data types =  String ,Number ,Boolean, Null ,Undefined ,Symbol
// PRIMITIVE DATA TYPES ME HUM DIRECTLY VALUE STORE KRTE HE
 //string can be declare as " ", ' ' , ` `;
 // null value jaan kreke dena 
 // undefined refers to when we cannot allocate the value then it will we the uundefiend 
// symbol is an unique immutable value;



// 2. Non-primitive data types = Object, Array , Function
// NON-PRIMITIVE DATA TYPES ME HUM VALUE NHI STORE KRTE HE HUM REFERENCE STORE KRTE HE

//example of ternary operator
let age = 1;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: Yes

// example of logical operators !
let isRaining = true;
let isSunny = false;
 !isRaining && isSunny ? console.log("Go outside") : console.log("Stay inside"); // Output: Stay inside