//? Method 1 is to use the destruction for export and import
// const {add, sub, mul, div} = require("./math");
// const sub = require("./math");
// console.log(add(4,3));
// console.log(sub(4,3));
// console.log(mul(4,3));
// console.log(div(4,3));


// ?Method 2 in this use import as a object
const math =require("./math") ;
 console.log(math.add(4,3));
console.log(math.sub(4,3));
console.log(math.mul(4,3));
console.log(math.div(4,3));

