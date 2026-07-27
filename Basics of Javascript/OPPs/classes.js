class student{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    study(name)
    {
        console.log(`${this.name} is studing js`);
    }
}

let s1=new  student("ram",20,"indore");
let s2=new  student("aa",10,"dhar");

console.log(s1);
console.log(s2);
s1.study();