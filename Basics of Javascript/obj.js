
let obj = {
    name: "Jiya",
    age: 25,
    city: "Mumbai",
    greet : function(){
        console.log("Hello , i am jiya from mumbai");
    }
}

console.log(obj); // Output: { name: 'Jiya', age: 25, city: 'Mumbai', greet: [Function: greet] }
console.log(obj.name); // Output: Jiya
console.log(obj.age);
console.log(obj.city);
obj.greet(); // Output: Hello , i am jiya from mumbai
console.log(typeof(obj)); // Output: [Function: greet]


// objects are dynamic in nature we can add new properties and methods to the object at runtime.
obj.Hight = 5.6;
console.log(obj.Hight); // Output: 5.6