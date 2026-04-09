// let para = document.getElementById("3p");
// para.style.backgroundColor = "red";
// para.style.color = "white";
// para.style.fontSize = "23px";
// para.style.padding = "4px";
// para.style.border = "2px solid black";

// using style we can only add one properrty at a time ; 

// now we will see how to add multiple properties at a time using cssText method
// let para = document.getElementById("3p");
// para.style.cssText ="background-color:chocolate; color:skyblue;"
//  + " padding:4px; font-size:23px; border:2px solid black;";

 //so using cssText we can add multiple properties at a time in one line of code.

 // using of setattribute method to add multiple properties at a time
//  let para = document.getElementById("3p");
//  para.setAttribute("style", "background-color:skyblue; color:red; padding:4px; font-size:23px; border:2px solid black;");
//  para.setAttribute("class","myparaclass");
// ye purani sarri propeerties ko override kar dega aur nayi properties add kar dega.
// agar hume purani properties ko rakhna hai aur nayi properties add karni hai to hume pehle purani properties ko get karna padega uske baad nayi properties add karni padegi.
// let para = document.getElementById("3p");
// let oldStyle = para.getAttribute("style");
// para.setAttribute("style", oldStyle + " background-color:skyblue; color:red; padding:4px; font-size:23px; border:2px solid black;");

// using of .classname used for adding class to the element
// let para = document.getElementById("3p");
// para.className = "myparaclass"; // this will override the existing class if there is any
// // agar hume purani class ko rakhna hai aur nayi class add karni hai to hume pehle purani class ko get karna padega uske baad nayi class add karni padegi.
// let oldClass = para.className;
// para.className = oldClass + " myparaclass"; // this will add the new class to the existing class

// using of classList used for adding class to the element
// adding class using classlist 
// let para = document.getElementById("3p");
// para.classList.add("myparaclass"); // this will add the new class to the existing class without overriding it   
// remove class using classlist
// para.classList.remove("myparaclass"); // this will remove the class from the element
// toggle class using classlist
// para.classList.toggle("myparaclass"); // this will add the class if it is not present and remove the class if it is present
// check if class is present using classlist
// console.log(para.classList.contains("myparaclass")); // this will return true if the class is present and false if the class is not present

