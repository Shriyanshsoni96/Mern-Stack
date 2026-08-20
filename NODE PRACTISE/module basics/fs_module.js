//! fs module is used to communication with the files and folder
const fs = require("fs");
const path =require("path");

const filename = "user.txt";
const filepath=path.join(__dirname,filename);
console.log(filepath)

fs.writeFileSync(
    filename,
    "this is the new file which i build using the fs module ,upated",
    "utf-8" 
);

console.log(fs.write)

//in this we are using the fs.writefilesync(filename , data , options ) ;

//? fs.writefileSync():write data to the file .if the file does not exists , it will be created . if file exits it will oveerwite the content
// filename : the file path to write to 
// data: we will give content to this 
// options: Optional include encoding(utf8,utf16,etc) ,modes, flags.

