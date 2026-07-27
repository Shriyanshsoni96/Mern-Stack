// const users={
//     name:"ram",
//     age:20,
//     city:"indore",
// };

// const {name, age}=users;
// console.log(name);
// console.log(age);
// basic destruction of the object in to the varibale
// Extract the values from an object and store them in variable is known as object destructing 


// nested destruction
const users={
    name:"shaym",
    age:21,
    address:{
        city:"indore",
        state:"Madhya pradesh",
    },
};

const{name, age, address:{city, state, region="INDIA"}}=users;
// assigning the new property with region directly in the desctructiing function

console.log(name);
console.log(age)
console.log(city)
console.log(state)
console.log(region)