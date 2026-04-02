try
{   console.log("This is try block");
    let result = x + result;
    console.log(result);
}
catch(error)
{ 
    throw new Error("declare kro bhiya x aur result variable ko");
    console.log("This is catch block and error is handled the error is " + error);
}
finally
{
    //finally is function which is used to execute the code which is written in the finally block regardless of whether an error is thrown or not.
    // ye hmesha chalta he 
    console.log("This is finally block ye sabse last me chalta he regardless of whether an error is thrown or not hmesha chalta he");
}

// throw is the keyword which used for throwing an error manually in javascript. It is used to create custom errors and to handle specific error conditions in the code. 
// When a throw statement is executed, it immediately stops the execution of the current function and propagates the error up the call stack until it is caught by a catch block or until it reaches the top level of the program.


