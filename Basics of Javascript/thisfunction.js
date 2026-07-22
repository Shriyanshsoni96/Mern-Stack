// const person={
//     name: "rahul",
//     age:21,
//     intro()
//     {
//         console.log(this.name);
//         console.log(this.age);
//     }
// };

// person.intro();

// In that code we used 'THIS' 
// this ki value function ko kaise call kiya gaya he uspe depend krti he.

// const user = {
//     name: "Shriyansh",
//     greet: () => {
//         console.log(this);
//     }
// };
// user.greet();

// while using the arrow function it does not create the this its 
// THiS in global scope 


// its solution 

// const user={
//     name:"ram",
//     show()
//     {
//         const inner = () =>{
//             console.log(this.name);
//         }
//         inner();
//     }
// };

// user.show();

// using the this in arrow function 

// if we are using the THIS then we will definetly use the 
// CALL function , BIND funtion , APPLY function 

// 1). CALL FUNCTION
// "Function ko immediately execute karo aur this ko manually set karo."

// function greet()
// {
//     console.log(" Hello "+this.name);
// }
// const person1={
// name:'ram',
// };
// const person2={
// name:'Taj',
// };

// greet.call(person1);
// greet.call(person2);


// 2). APPLY Function
// same call function jiasa he bs isme argument pass kiya gya he 

// function intro(city ,country)
// {
//     console.log(this.name, city , country);
// }

// const person={
//     name:"Shoeb",
// };

// intro.apply(person,["Indore", "INDIA"]);


// 3). BIND FUNCION
// in this bind it cretes new function to return bind() function ko turant call nahi karta.

//Ye ek naya function return karta hai jisme this permanently bind ho jata hai.


// const user={
//     name:"Radhe Shyam Tiwari ",
// };

// function greeting(){
//     console.log(this.name);
// }

// const greet= greeting.bind(user);
// greet();

// Using of the Constructors 
// we used this because wew dont want to write thet same thing repitative.
// const student1 = {
//     name: "Shriyansh",
//     age: 21
// };

// const student2 = {
//     name: "Rahul",
//     age: 22
// };

// const student3 = {
//     name: "Aman",
//     age: 20
// };
// this is repitative task which we are trying to insert every student details 
// so we will replace by directing the things using the constructors 

function Student(name,age){
    this.name=name;
    this.age=age;
}
// this is the constructors function
const s1 = new Student("Shriyansh", 21);
const s2 = new Student("Vedansh", 16);

console.log(s1);
console.log(s2);

