//! fs module is used to communication with the files and folder
const fs = require("fs");
// const fs = require("fs/promises");
const path = require("path");
const filename = "user.txt";
const filepath = path.join(__dirname, filename);
// console.log(filepath)


//!Are you tired of using fs. promises everytime?
//.You. can. actually. just. import. with- fs/promises
//. const . fs. =. require("fs/promises"
// · Now, · you. don' t. need. to . use . fs. promises . everytime.



//! syntax: fs.promises.writeFile(path,data, options).then(data
//? ...).catch(err =... );
//? path: Path to the file.
//? options: Encoding ('utf8') or no encoding for binary data.
//? reading the current user.txt file 


//creating the file 
// fs.promises
//   .writeFile(filepath,
//     "This the new file using the fs module wuith the promises ",
//     "utf-8"
// )
//    .then((console.log("File created succesfully")))
//   .catch((err)=>console.log(err))
//   ;


//! syntax: fs.promises.readDir(path).then(data
//? ...).catch(err =... );
//? path: Path to the file.
//? options: Encoding ('utf8') or no encoding for binary data.
//? reading a directory using the fs module with promises


// const file1 = __dirname;
// fs.promises
//   .readdir(file1)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));



//! syntax: fs.promises.readFile(path, options).then(data
//? ...).catch(err =... );
//? path: Path to the file.
//? options: Encoding ('utf8') or no encoding for binary data.
//? reading the current user.txt file 

// fs.promises
//   .readFile(filepath,"utf-8")
//   .then((data)=>console.log(data))
//   .catch((err) => console.log(err));



//! syntax: fs.promises.appendFile(path,data,options).then(data
//? ...).catch(err =... );
//? path: Path to the file.
//? options: Encoding ('utf8') or no encoding for binary data.
//? reading the current user.txt file 

// fs.promises
//   .appendFile(filepath,
//     "Now we have added the new data in the user file ",
//     "utf-8"
// )
//    .then((console.log("Data added succesfully")))
//   .catch((err)=>console.log(err))
//   ;

//! syntax: fs.promises.unlink(path).then(data
//? ...).catch(err =... );
//? path: Path to the file.
// fs.promises
//   .unlink(filepath)
//   .then((console.log("Deleted Succesfully")))
//   .catch((err)=> console.log(err))
//   ;

//! syntax: fs.promises.rename(oldpath,newpath).then(data
//? ...).catch(err =... );
//? oldpath: current Path to the file.
//? newpath: newpath Path to the file.
//? options: Encoding ('utf8') or no encoding for binary data.
//? reading the current user.txt file 

const name1 = "itsme.txt";
const newpath = path.join(__dirname,name1);

fs.promises.rename(filepath,newpath)
  .then(()=> console.log("name changed "))
  .catch((err)=>console.log("Error iin name "+err));


//*   fs.promises.readFile()
//!           ↓
//*        Promise
//!        ↙     ↘
//*    success   failure
//!      ↓          ↓
//*    .then()   .catch()

//! Advantage
//? Much cleaner than nested callbacks.

//! Disadvantage
//? .then().catch() can become slightly harder to read when you have many sequential operations.