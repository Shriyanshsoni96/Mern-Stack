class human{
// constructor is a special method that is called when an object is created from a class. It is used to initialize the properties of the object.
// propeerties are the characteristics of an object and methods are the actions that an object can perform.   
name ="Vaibhav";
   age = 25;
   city = "Mumbai";
   Hight = 5.8;
    // behavior is the action that an object can perform and it is defined as a method in a class.
   greet(){
    console.log("Hello , i am vaibhav from mumbai");
   }
   Form(){
    console.log("I am a student of computer engineering");
   }
   
}

let person1 = new human(); // creating an object of the class human
console.log(person1.name)
console.log(person1.age)
console.log(person1.city)
console.log(person1.Hight)
person1.greet();
person1.Form();