// localStorage.setItem("theme","Dark");
// const theme =  localStorage.getItem("theme");
// console.log(theme);

// localStorage.removeItem("theme");
// console.log(localStorage.getItem("theme"));

//to retrieve with the object
// localStorage.setItem(
//     "user",
//     JSON.stringify(user)
// );
// in this we need to convert that into a string then while printing same i reverse process
// const data = localStorage.getItem("user");
// const userData = JSON.parse(data);
// console.log(userData.name);

const user = {
  name: "Rahul",
  age: 21,
  city: "Indore",
};

localStorage.setItem("user",
    JSON.stringify(user)
);

const data = localStorage.getItem("user");
const userData = JSON.parse(data);
console.log(userData.name);
