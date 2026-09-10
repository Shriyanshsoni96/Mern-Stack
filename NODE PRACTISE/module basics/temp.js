const fs = require("fs/promises");
const path = require("path");

const filename = "student.txt";
const filepath = path.join(__dirname, filename);
// console.log(filepath);

// fs.writeFile(
//   filepath,
//   "write the file with the full of information in this ",
//   "utf-8",
// )
//   .then(() => console.log("file created succesfuly"))
//   .catch((err) => {
//     console.log(err);
//   });

// fs.appendFile(
//     filepath,
//     "this is the new data that we need to update the software ",
// )
// .then(() => console.log("file updated succesfully"))
//   .catch((err) => {
//     console.log(err);
//   });

fs.readFile(filepath, "utf-8")
  .then((data) => {
    console.log(data);
    console.log("reading the file");
  })
  .catch((error) => {
    console.log(error);
  });
