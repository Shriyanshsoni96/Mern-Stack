 const EventEmitter= require("events"); 
 //? we are importing the Event module in this line

 const emitter = new EventEmitter();
 //? we create the instance in of event module
 //? Event Emitter node.js ka ek special object/class hai jo event trigger , listen , or register krta he 
 
 //! .on() method is used to create or listen the event 
 //! .on() kisi event ke liye listener register karta hai.
//  emitter.on("greet",(user)=>{
//     console.log("Hello "+user);
//  });
  
// //! .emit() kisi event ko trigger/fire karta hai.
//  emitter.emit("greet" ,"Radhe Shayam");
 
 //? if we want to pass the no of arguments in single times so we create the object 
 
 emitter.on("greet" , (arg) =>{

    console.log(`Hello ${arg.name}, Proffesion ${arg.prof} , AGE ${arg.age}`);
 
});

 emitter.emit("greet" ,{ name:"Radhe Shayam" ,prof:"Full Stack Developer", age:"24"});
 
