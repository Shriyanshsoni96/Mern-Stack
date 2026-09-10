//! fs module is used to communication with the files and folder
const fs = require("fs");
const path =require("path");
const filename = "user.txt";
const filepath=path.join(__dirname,filename);
// console.log(filepath)



//* fs.writefileSync():write data to the file .if the file does not exists , it will be created . if file exits it will overwrite the content
//! syntax: const data = fs.readFileSync(filePath,data, options);
//? filename : the file path to write to 
//? data: we will give content to this 
//? options: Optional include encoding(utf8,utf16,etc) ,modes, flags

// fs.writeFileSync(
//     filepath,
//     "this is the new file which i build using the fs module ,upated",
//     "utf-8" 
// );
// console.log(fs.write)


//* fs.readFileSync(): Reads a file's content and returns it as a string or buffer 
//! syntax: const data = fs.readFileSync(filePath, options);
//? filePath: Path of the file to read.
//? options: Optional. Encoding ('utf8') to get data as a string.

// const readfile = fs.readFileSync(filename,"utf-8");
// console.log(readfile);

// if we are not using any type of the options then will give the output in the binary format so we need to convert that into the a string using .tostring();
//! Use .toString() if working with binary data (Buffer): For example, if you need both the raw binary data and its string representation.


//* fs.appendFileSync(): Appends data to a file. If the file does not exist, it creates the file.
//! syntax: fs.appendFileSync(filePath, data, options);
//? filePath: File path to append to.
//? data: Content to add to the file.
//? options: Optional. Encoding options ('utf8').

// const appednfile =fs.appendFileSync(
//     filename,
//     " \n this is the updated data",
//     "utf-8"
// ) ;
// console.log(appednfile);





//* Delete File (fs. unlinkSynq()) : Deletes a file by its path.
//! syntax: fs.unlinkSync(filePath);
//? filePath: The path of the file to delete.

// const deletefile =fs.unlinkSync(filename) ;
// console.log(deletefile);


//* Rename File (fs.renameSync) : Renames a file from one name to another.
//! syntax: fs.renameSync(oldPath, newPath);
//? oldPath: Current file path.
//? newPath: New file path or name.

const newname = "updated.txt"; 
const newfilepath =path.join(__dirname,newname)

const renamefile= fs.renameSync(filepath,newfilepath);
console.log(renamefile);



//*                 readFileSync()
//!                       ↓
//*           Wait until file is completely read
//!                       ↓
//*                      data
//!                       ↓
//*                console.log(data)
//!                       ↓
//*                console.log("Done")


//! Advantage
//? Very simple.

//! Disadvantage
//? It blocks the Node.js thread.

// Imagine your server has:
// 100 users
//    ↓
// Request 1 → read file → WAIT
// Request 2 → WAIT
// Request 3 → WAIT
// Request 4 → WAIT

// When should you use Sync?

// Mostly:

// small scripts
// CLI programs
// startup/configuration code
// situations where blocking is intentional
// learning/testing