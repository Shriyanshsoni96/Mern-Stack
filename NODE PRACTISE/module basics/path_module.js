const path= require("path");

// console.log(__dirname)// provides the current directory path 
// console.log(__filename)// provides the full path with the file name 

// ex. ek file bnna he school->class->section->student.txt 

const filepath=path.join("school","class","section","student.txt");
console.log(filepath);
// provides the full path which we made 

console.log(path.basename(filepath)); // filename
console.log(path.extname(filepath)); // file extention iska he txt 
console.log(path.resolve(filepath)); // current+fielname complete
console.log(path.dirname(filepath)); // directory name
console.log(path.parse(filepath)); // proper json me kya extension he sab kuch

