import readline from "readline";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let filename;
let filepath;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const showmenu = () => {
  console.log("\n1. Add your file.");
  console.log("2. Add the data in file.");

  rl.question("Choose the option: ", handleinput);
};

const writeFile = async (data) => {
  try {
    await fs.writeFile(filepath, data, "utf-8");

    console.log("File created successfully");
  } catch (err) {
    console.log(err);
  }
};

const handleinput = (option) => {
  if (option === "1") {
    rl.question("Enter your file name: ", (task) => {
      filename = task;

      showmenu();
    });
  } else if (option === "2") {
    rl.question("Enter the data in the file: ", async (task) => {
      filepath = path.join(__dirname, filename);

      await writeFile(task);

      rl.close();
    });
  } else {
    console.log("Invalid Input.");

    showmenu();
  }
};

showmenu();
