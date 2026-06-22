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

// let count =0;
// const intervalid= setInterval(() => {
//     console.log("execution");
//     count++;
//     if(count>=5){
//         clearInterval(intervalid);
//     }
// }, 2000);

// const promise= new Promise((res,rej)=>{
// let s=true;
// if(s)
// {
//     res("fulfilled");
// }
// else{
//     rej("Tera passsword galat he");
// }
// });

// promise.then(result=>{
//     console.log(result);
// })
// .catch(error=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("Ho gya ab ");

// })

async function greet(){
    return ("hello");
};
console.log(greet());


function fetchdata()
{
    setTimeout(() => {
        console.log("data is fectched");
    }, 3000);

}

async function getdata(){
    const data=await fetchdata();
    console.log(data);
}

getdata();