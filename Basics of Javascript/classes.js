// class human{
// // constructor is a special method that is called when an object is created from a class. It is used to initialize the properties of the object.
// // propeerties are the characteristics of an object and methods are the actions that an object can perform.   
// name ="Vaibhav";
//    age = 25;
//    city = "Mumbai";
//    Hight = 5.8;
//     // behavior is the action that an object can perform and it is defined as a method in a class.
//    greet(){
//     console.log("Hello , i am vaibhav from mumbai");
//    }
//    Form(){
//     console.log("I am a student of computer engineering");
//    }
   
// }

// let person1 = new human(); // creating an object of the class human
// console.log(person1.name)
// console.log(person1.age)
// console.log(person1.city)
// console.log(person1.Hight)
// person1.greet();
// person1.Form();

// by default all the properties and methods of a class are public but we can make them private by using the # symbol before the property or method name.
// class human1{
//     #name ="Vaibhav";
//     #age = 25 
//     #city = "Mumbai";
//     myname()
//     {
//         console.log("My name is ", this.#name);
//     }
// }
// let person2 = new human1();
// console.log(person2.name); // Output: undefined
// person2.myname(); // Output: My name is Vaibhav
// if we try to access the private properties of the class we will get undefined because they are not accessible outside the class.



// using of getters and setters in a class
// let person = {
//   age: 0,

//   set setAge(value) {
//     if (value < 0) {
//       console.log("Age cannot be negative");
//     } else {
//       this.age = value;
//     }
//   },

//   get getAge() {
//     return this.age;
//   }
// };

// use of constructor in a class
// the constructor is a special method that is called when an object is created from a class. It is used to initialize the properties of the object.

// class human{
//      name ="Vaibhav";
//    age = 25;
//    city = "Mumbai";
//    #Height = 5.8;
//     constructor(name, age, city, height) {
//         this.name = name;
//         this.age = age;
//         this.city = city;
//         this.#Height = height;
//     }
//     get getHeight() {
//         return this.#Height;
//     }

//     greet() {
//         console.log("Hello, I am ",this.name ," from ",this.city);
//     }

//     form() {
//         console.log("I am a student of computer engineering");
//     }
// }


// let person= new human("Ramehswar",23, "Indore" , 6.4); 
// console.log(person.name)
// console.log(person.age)
// console.log(person.city)
// console.log(person.getHeight)
// person.greet();
// person.form();

// using Default parameters in a constructor
// function fisrtClass(name)
// {
//     console.log("Hello ", name);
// }

// fisrtClass("Vaibhav"); // Output: Hello Vaibhav
// fisrtClass(); // Output: Hello undefined
// when we do not pass any argument to the function then the parameter will be undefined. 
// To avoid this we can use default parameters in the constructor.
// function fisrtClass(name = "Vaibhav")
// {
//     console.log("Hello ", name);
// }
// fisrtClass("Rameshwar"); // Output: Hello Rameshwar
// fisrtClass(); // Output: Hello Vaibhav
// when we do not pass any argument to the function then the parameter will be "Vaibhav" because we have set the default value of the parameter to "Vaibhav".

// in the default parameter we can also use objects as default parameters in the constructor.\
// function set(name ={ age: 34, city: "indore" })
// {    console.log("Hello ", name);
// }
// set();
// set("ramu");
// it means it can also print the object as well as the string value passed as an argument to the function.
