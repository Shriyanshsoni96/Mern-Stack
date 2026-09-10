//async/await is primarily syntax for working with Promises.
// async/await is NOT a fourth type of file API
// These two are basically using the same Promise-based API:

// so this basicsally its a partof prmoises which can use if we want 

//! fs module is used to communication with the files and folder
const fs = require("fs");
// const fs = require("fs/promises");
const path = require("path");
const filename = "user.txt";
const filepath = path.join(__dirname, filename);
// console.log(filepath)


//! for creating the file 
// 
// const writefile1 = async()=>{
// try { 
//   await fs.promises.writeFile(filepath,"this the file ","utf-8");
//   console.log("File Created Succesfuly ");
// } catch (error) {
//     console.log(error);
// }
// };

// writefile1();

//!for reading the file 

// const readfile1 = async()=>{
// try { 
//   const data = await fs.promises.readFile(filepath,"utf-8");
//   console.log(data);
// } catch (error) {
//     console.log(error);
// }
// };

// readfile1();

//! for update the file  
// const updatefile1 = async()=>{
// try { 
//   await fs.promises.appendFile(filepath,"this the file updated","utf-8");
//   console.log("File updated Succesfuly ");
// } catch (error) {
//     console.log(error);
// }
// };

// updatefile1();


// //! delete the file 
// const deletefile1 = async()=>{
// try { 
//   await fs.promises.unlink(filepath);
//   console.log("File delted Succesfuly ");
// } catch (error) {
//     console.log(error);
// }
// };

// deletefile1();