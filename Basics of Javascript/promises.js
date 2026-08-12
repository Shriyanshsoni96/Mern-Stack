const orderfood = new Promise((resolve,reject)=>{
    let foodready= false;

    if(foodready){
        resolve("Food is ready");
    }
    else
    {
        reject("Order Decline");

    }

});

orderfood
.then((result)=>{
    console.log(result);
})

.catch((error)=>{
    console.log(error)
    throw new error("ham ni bna rhe order baat khtm ");
});



