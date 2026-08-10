const src = {
    age:12,
    wt:"43kg",
    Ht:5.6,
}// object created

// cloning of object using the spread (...);
// const dest = {...src};
// src.age=23;
// both thee objects are refring to different objects and memory
// console.log(src);
// console.log(dest);


// cloning using the assign operator 
// let dest=Object.assign({},src);
// src.age=23;

// console.log(src);

// multiple object cloning
const src2={
    name:"Rajesh",
    class:"OBC"
}
let dest=Object.assign({},src,src2);
console.log(dest);

