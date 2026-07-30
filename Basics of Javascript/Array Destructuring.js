// Extract the values from an array and store them in variable is known as array destructing 


// const alphabet = ["a","b","c","d"];
// const[first, second, third]=alphabet;
// console.log(first);
// console.log(second);
// console.log(third);

// const colors=["Red","Green","Blue"]
// const [clr_1,clr_2,clr_3]=colors;
// console.log(clr_1)
// console.log(clr_2)
// console.log(clr_3)



//using of rest 
const colors=["Red","Green","Blue","Orange"]
const [clr_1,clr_2,...rest] = colors;
console.log(clr_1)
console.log(clr_2)
console.log(rest)// all the rest remaining elements came 


// Skipping values 
// const colors=["Red","Green","Blue","Orange"]
// const [clr_1,clr_2,,clr_4] = colors;
// console.log(clr_1)
// console.log(clr_2)
// console.log(clr_4)


