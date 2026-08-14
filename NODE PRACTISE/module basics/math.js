const add =(a, b) =>{
    return a+b;
};
const sub =(a, b) =>{
    return a-b;
};
const mul =(a, b) =>{
    return a*b;
};
const div =(a, b) =>{
    return a/b;
};

//* using commonjs module 
// module.exports= add;
// module.exports= sub;
// module.exports= add;
// module.exports= add;

//? When we declare the multiple exports in singulr ways it reassign the values for all
// todo:- So there are two diffrent methods to use the multiple modules in the single way

//* Method-1  first way to use the destructor method for both import and export 
module.exports={add, sub, mul, div};

//* Method-2 same for the export but different for the import 
// module.exports={add, sub, mul, div};

