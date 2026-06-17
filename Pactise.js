// const names =["gagan","ishan","yogesh"];

// // console.log(names.toUpperCase());

// const arr3 = names.map(function(names){
//    return names.toUpperCase();
// })
// console.log(arr3);

// practise question
// const product=[
//     {id:1, name: "laptop"},
//     {id:2, name: "Phone"},
//     {id:1, name: "Tablet"},
// ];

// const q2ar=product.map(function(product)
// {
//     return product.name;
// })
// console.log(q2ar);
// const q1=product.map(product=>product.name);
//     console.log(q1);

// practise question 3

// const words=["apple","banana","cat","Elephant","dog"];
// arr4 = words.filter(function(animal){
//     return words.length>5;
// })
// console.log(arr4);

let users = [
    { names: "A", age: 16 },
    { names: "B", age: 19 },
    { names: "C", age: 21 }
];

let arr4 = users.filter((user) => {
    return user.age > 18;
});

console.log(arr4);
