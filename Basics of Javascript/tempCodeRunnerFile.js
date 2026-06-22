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

// async function greet(){
//     return ("hello");
// };
// console.log(greet());


// function fetchdata()
// {
//     setTimeout(() => {
//         console.log("data is fectched");
//     }, 3000);

// }

// async function getdata(){
//     const data=await fetchdata();
//     console.log(data);
// }

// getdata();




//  Task 1 
// function startDownload(callback) {
//     console.log("Download Started...");

//     setTimeout(() => {
//         callback();
//     }, 3000);
// }

// function downloading(callback) {
//     console.log("Downloading...");

//     setTimeout(() => {
//         callback();
//     }, 2000);
// }

// function downloadComplete() {
//     console.log("Download Completed!");
// }

// startDownload(() => {
//     downloading(() => {
//         downloadComplete();
//     });
// });

// // 

// // task 2
function download(url, callback) {
console.log("Starting download...");
setTimeout(() => {
console.log("Download completed");
callback();