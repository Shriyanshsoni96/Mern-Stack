//! fs module is used to communication with the files and folder
const fs = require("fs");
const path =require("path");
const filename = "user.txt";
const filepath=path.join(__dirname,filename);
// console.log(filepath)


//* fs.writefile():write data to the file .if the file does not exists , it will be created . if file exits it will overwite the content
//! syntax: const data = fs.readFileSync(filePath,data, options,callback);
//? filename : the file path to write to 
//? data: we will give content to this 
//? options: Optional include encoding(utf8,utf16,etc) ,modes, flags
//? callback : a function with the error parameter 

// const writefile = fs.writeFile(
//     filepath,
//     "this is the new file which i made using the async function of writefile ",
//     "utf-8",
//     (err)=>{
//         console.log(err);
//     }
// )

// console.log(writefile);



//* fs.readFile(): Reads a file's content and returns it as a string or buffer 
//! syntax: const data = fs.readFile(filePath, options , callback(err,data));
//? filePath: Path of the file to read.
//? options: Optional. Encoding ('utf8') to get data as a string.
//? callback : a function with the error and  data . 


// const readfile = fs.readFile(
//     filepath,
//     "utf-8",
//     (err , data)=>{

//     if(err) console.log(err)
        
//     else console.log(data);
//     }
// );

// if we are not usng any type of the options then will give the output in the binary format so we need to convert that into the a string using .tostring();
//! Use .toString() if working with binary data (Buffer): For example, if you need both the raw binary data and its string representation.


//* fs.appendFile(): Appends data to a file. If the file does not exist, it creates the file.
//! syntax: fs.appendFileSync(filePath, data, options ,callback);
//? filePath: File path to append to.
//? data: Content to add to the file.
//? options: Optional. Encoding options ('utf8').

// const appednfile =fs.appendFile(
//     filepath,
//     " \n this is the updated data",
//     "utf-8",
//     (err)=>{
//         if(err) console.log(err)
//     }
// );
// console.log(appednfile);




//* Delete File (fs. unlink()) : Deletes a file by its path.
//! syntax: fs.unlink(filePath,callback);
//? filePath: The path of the file to delete.

// const deletefile =fs.unlink(filepath,(err)=>console.log(err));
// console.log(deletefile);


//* Rename File (fs.rename) : Renames a file from one name to another.
//! syntax: fs.rename(oldPath, newPath , callback );
//? oldPath: Current file path.
//? newPath: New file path or name.

// const newname = "uaed.txt"; 
// const newfilepath =path.join(__dirname,newname)

// const renamefile= fs.rename(filepath , newfilepath , (err)=>console.log(err));
// console.log(renamefile);


