const crypto = require("crypto");

//? Method 1 Hashing 
// const hash = crypto
//             .createHash("sha256") //declare the algorithm which we are using in this  
//             .update("Shri@2026")// provide the data in this that we are using this 
//             .digest("hex"); // provide the format in whihc you want to convert the data 

// console.log(hash);
//Output-ff87df65aa18b89080dd1c39c319ce72003bae8682e26851a2d9432778c784aa

//* usage 
//when we use to login in hasing process will convert out data and store in the database or also used to check that is our password is same
//Used to securely handle passwords through password-hashing algorithms such as bcrypt, scrypt, or Argon2

//? Method 2 For genreating random token 

const token = crypto.randomBytes(32).toString("hex");
console.log(token);
//output it will generate new token everytime
//*usage 
// It is used when we uses forgot password
// Password-reset tokens, Email-verification tokens, Session IDs, API secrets, One-time tokens