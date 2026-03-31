
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
