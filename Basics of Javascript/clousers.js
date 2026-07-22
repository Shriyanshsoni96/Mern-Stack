// function outer() {

//     let name = "Shriyansh";

//     function inner() {

//         console.log(name);

//     }
  
//   return inner;
// }

// const fun = outer();

// fun();


// example 2

// function createcounter(){
// let count= 0 ; 
//  return function(){
//   count++;
//   return count;
//  };

// }

// const counter= createcounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// in this example i have crete the clouser which store the refenrence of the memory
//  thats why every time the values are getting increase 
// clousers apne parent functions ko yaad krte he even parent used ho chuka ho

// function createOTPSystem() {
//     // Private Variable
//     let otp = null;
//     function generateOTP() {
//         otp = Math.floor(100000 + Math.random() * 900000);
//         console.log("Generated OTP:", otp);
//         return otp;
//     }
//     function verifyOTP(userOTP) {
//         if (userOTP == otp) {
//             console.log("✅ OTP Verified");
//         } else {
//             console.log("❌ Wrong OTP");
//         }
//     }
//     return {
//         generateOTP,
//         verifyOTP
//     }
// }


