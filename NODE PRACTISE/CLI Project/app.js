import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos = [];

const showmenu = () => {
  console.log("\n1: Add the task");
  console.log("2: View task");
  console.log("3: End task");
  rl.question("Choose an options : ", handleinput);
};
const handleinput = (Option) => {
  if (Option === "1") {
    rl.question("Enter your Task : ", (task) => {
      todos.push(task);
      console.log("Task added: ", task);
      showmenu();
    });
  }
  else if (Option ==="2"){
    rl.question(" Your tasks to do : ");
    todos.forEach((task,index)=>{
        console.log(`${index+1}.${task}`);
    })
    showmenu();
  }
  else if(Option ==="3" ){
    console.log("Good Byeeeeee! ");
    rl.close();
  }
  
  else{
    console.log("Invalid Input ");
    showmenu();
  }
};

showmenu();
