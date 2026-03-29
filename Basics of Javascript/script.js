
// let a = 12;
// let b = a ; 
//  a= a+2 ; 
// console.log(a);
// let n = null;
// console.log(n); 
// let u1 = Symbol("UID");
// let u2 = Symbol("UID");

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

//operators in javascript
// 1. Arithmetic operators = + , - , * , / , % , ++ , --
// 2. Assignment operators = = , += , -= , *= , /= , %=
// 3. Comparison operators = == , === , != , !== , > , < , >= , <=
// 4. Logical operators = && , || , !
// 5. Bitwise operators = & , | , ^ , ~ , << , >> , >>>
// 6. Ternary operator = condition ? expression1 : expression2

// //example of ternary operator
// let age = 1;
// let canVote = age >= 18 ? "Yes" : "No";
// console.log(canVote); // Output: Yes

// // example of logical operators !
// let isRaining = true;
// let isSunny = false;
//  !isRaining && isSunny ? console.log("Go outside") : console.log("Stay inside"); // Output: Stay inside
//  console.log("Hello World"); 


//string 
// let firstname = "Jonny"
// let lastname = "Das "
// let middlename =`kumar`
    // console.log(firstname + " " + middlename + " " + lastname); // Output: John kumar Doe
// if i want to print the type of a variable then we can use typeof operator
// console.log(typeof firstname);
// let khandan = `das familty ka
// sabse bada khandan 
// he 
// or me isme hi 
// rehaunga
// samjha kya
// `; 
// console.log(khandan);
// let name = new String("Jonny");
// console.log(name); // Output: [String: 'Jonny']
// let op1 = firstname 
// let op2 = lastname
// console.log(`${op1} ${middlename} ${op2}`); // Output: John kumar Doe
// template literals me aapko ${} ke andar variable ka naam dena hota he jisko aap print krna chahte ho

// if i want to print the length of a string then we can use length property
// console.log(firstname.length); // Output: 5

// if i want to print the index of a character in a string then we can use indexOf() method
// console.log(firstname.indexOf("n")); // Output: 2
// if i want to print the last index of a character in a string then we can use lastIndexOf() method
// console.log(firstname.lastIndexOf("n")); // Output: 3
// if i want to print the character at a specific index in a string then we can use charAt() method
// console.log(firstname.charAt(2)); // Output: n

// if i want to print the substring of a string then we can use substring() method
// console.log(firstname.substring(1, 4)); // Output: onn
// if i want to print the slice of a string then we can use slice() method
// console.log(firstname.slice(1, 4)); // Output: onn 
// if i want to print the split of a string then we can use split() method
// console.log(firstname.split("")); // Output: [ 'J', 'o', 'n', 'n', 'y', ' ' ]
// if i want to print the replace of a string then we can use replace() method
// console.log(firstname.replace("Jonny", "John")); // Output: John
// if i want to print the toUpperCase of a string then we can use toUpperCase() method
// console.log(firstname.toUpperCase()); // Output: JONNY
// if i want to print the toLowerCase of a string then we can use toLowerCase() method
// console.log(firstname.toLowerCase()); // Output: jonny
// if i want to print the trim of a string then we can use trim() method
// let str = "   Hello World   ";
// console.log(str.trim()); // Output: Hello World
//trim() method removes whitespace from both ends of a string but it does not remove whitespace from the middle of a string

// let name = "hello \"kaise\" ho aap log";
// console.log(name); // Output: hello "kaise" ho aap log
// // if i want to print the backslash in a string then we can use double backslash
// let path = "C:\\Users\\Jonny\\Documents";
// console.log(path); // Output: C:\Users\Jonny\Documents
