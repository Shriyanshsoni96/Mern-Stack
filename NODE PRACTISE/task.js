const { count } = require("console");
const EventEmitter = require("events");
const emitter = new EventEmitter();

const eventcount =
{
    "user-login":0,
    "user-logout":0,
    "user-purchase":0,
    "user-profile_update":0,
};

//! login
emitter.on("login",(user)=>{
 eventcount["user-login"]++;
 console.log(` ${user} Login Succesfully `);

});

//! logout 

emitter.on("logout",(user)=>{
 eventcount["user-logout"]++;
 console.log(` ${user} Logout Succesfully `);
});
//! purchase

emitter.on("purchase",(user,item)=>{
  eventcount["user-purchase"]++;
 console.log(` ${user} has purchasesd ${item}Succesfully `);
});

//! profile update 

emitter.on("profile",(user ,age)=>{
 eventcount["user-profile_update"]++;
 console.log(` ${user} updated there age:${age} Succesfully `);
});


emitter.emit("login","Radhe Shayam");
emitter.emit("logout","Radhe Shayam");
emitter.emit("purchase","Radhe Shayam" ,"Shoes ");
emitter.emit("profile","Radhe ","24");
emitter.emit("login","Radhe");
emitter.emit("purchase","Shayam" ,"Shoes ");
emitter.emit("profile","Raju","24");

emitter.on("spsmry",(eventcount)=>{
    console.log(eventcount);
}
   )


emitter.emit("spsmry", {
    eventcount
})

