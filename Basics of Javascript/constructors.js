// wew are using the this function in this 
// Using of the Constructors 
// we used this because wew dont want to write thet same thing repitative.
const student1 = {
    name: "Shriyansh",
    age: 21
};

const student2 = {
    name: "Rahul",
    age: 22
};

const student3 = {
    name: "Aman",
    age: 20
};
// this is repitative task which we are trying to insert every student details 
// so we will replace by directing the things using the constructors 

function Student(name,age){
    this.name=name;
    this.age=age;
}
// this is the constructors function
const s1 = new Student("Shriyansh", 21);
const s2 = new Student("Vedansh", 16);

console.log(s1);
console.log(s2);

