// functions without parameters and without return type
// function print()
// {
//     for(let i = 9 ; i >= 0 ; i--)
//     {
//         console.log(i);
//     }
// }

// print();

// functions with parameters and without return type
// function print(num)
// {
//     for(let i = num ; i >= 0 ; i--)
//     {
//         console.log(i);
//     }
// }

// print(5);

// functions with parameters and with return type   
// function add(num1, num2)
// {
//     return num1 + num2;
// }

// let result = add(5, 10);
// console.log(result); // Output: 15

// //simple function with paramerters and with return type
// function add(num1, num2) {
//    let result = num1 + num2;
//    return result;
// }                           
// console.log(add(5, 10)); // Output: 15

// using arrow function
let add =(nums1, nums2) => {
    let result = nums1 + nums2;
    return result;

}
console.log(add(5, 10)); // Output: 15
