// let dst= {
//     age:23, 
//     wight:34,
//     room :23
// }
// this is spread operator which is used to clone the object in javascript. 
// it creates a new object with the same properties and values as the original object.
// console.log(dst); 
// let src={...dst};
// src.age = 25;
// console.log(src);


//for the reference we directly assign the object to another variable then both the variables will point to the same object in the memory.
// let src = dst;
// src.age = 25;
// console.log(src); // Output: { age: 25, wight: 34, room: 23 }
// console.log(dst); // Output: { age: 25, wight: 34, room: 23 }
// when we change the value of the property in the src object then it also changes the value of the property in the dst object because both the variables are pointing to the same object in the memory.


// method 2 to clone the object in javascript is using Object.assign() method. 
// it creates a new object with the same properties and values as the original object.
// let src = Object.assign({}, dst);
// src.age = 25;
// console.log(src); // Output: { age: 25, wight: 34, room: 23 }
// console.log(dst); // Output: { age: 23, wight: 34, room: 23 }
// when we change the value of the property in the src ob ject then it does not change the value of the property in the dst object because both the variables are pointing to different objects in the memory.

// cloning using using iteration
// let src = {};
// for(let key in dst)
// {
//     src[key] = dst[key];
// }
// src.age = 25;
// console.log(src); // Output: { age: 25, wight: 34, room: 23 }
// console.log(dst); // Output: { age: 23, wight: 34, room: 23 }
// when we change the value of the property in the src object then it does not change the value of the property in the dst object because both the variables are pointing to different objects in the memory.
