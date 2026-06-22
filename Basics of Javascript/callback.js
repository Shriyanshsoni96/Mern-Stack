//basic callback function

// function greet(name,callback)
// {
//     console.log("hello "+ name);
//     callback();
// }
// function goodbye()
// {
//     console.log("goodbye");
// }
// greet("daksh",goodbye);


// console.log("Download Started");
// setInterval(() => {
//     console.log("Download Completed")
// }, 2000);

// console.log("show Data");

const promise= new Promise((res,rej)=>{
let s=false;
if(s)
{
    res("fulfilled");
}
else{
    rej("Tera passsword galat he");
}
});

promise.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
})
