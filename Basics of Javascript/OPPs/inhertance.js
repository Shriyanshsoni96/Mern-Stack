// Inheritance allows one class to acquire properties and methods of another class.

// class animal{
//     eat()
//     {
//         console.log("eating");
//     }
//     sleep()
//     {
//         console.log("sleeping");
//     }
// }

// class Dog extends animal{
//     bark()
//     {
//         console.log("barking");
//     }
// }

// const dog=new Dog();
// {
//  dog.eat();
//  dog.sleep();
//  dog.bark();

// }

// task 1 
// class bike{
//     model()
//     {
//         console.log("2022");
//     }
//     name()
//     {
//         console.log("Shine sp 125");
//     }
    

// }

// const b = new bike();
// {
//   b.model();
//   b.name();
// }


// task 2 multiple inheritance

// class car{
//     engine()
//     {
//         console.log(" V12 turbo Desile engine");
//     }
//     brand()
//     {  
//         console.log(" BMW ");
//     }

// }

// class m4 extends car{
//     model(){
//         console.log(" 2026 premium model");
//     }
    
// }
// const Car = new m4();
// {
//   Car.engine();
//   Car.brand();
//   Car.model();
// }


// task 3 herarchical model 

// class vehical{
//     start()
//      {
//     console.log("vehical started");
//      }
//     types()
//     {
//         console.log("Bike ,Car ,Truck ");
//     }
// }

// class Car extends vehical{
//      drive()
//      {
//         console.log("drive the car");
//      }
// }


//  class sportscar extends vehical
//  {
//      drive()
//      {   
//         console.log("Drive the Sports car ");
//      }
//   }
 
// const sport = new sportscar();
// {
//     sport.start();
//     sport.drive();
// } 
// const car = new Car();
// {
//     car.start();
//     car.drive();
// }


//task 4 

// class vehical{
//     start()
//      {
//     console.log("vehical started");
//      }
//     types()
//     {
//         console.log("Bike ,Car ,Truck ");
//     }
// }

// class Car extends vehical{
//      drive()
//      {
//         console.log("drive the car");
//      }
// }


//  class sportscar extends Car
//  {
//      tubomode()
//      {   
//         console.log("Turbo mode on  ");
//      }
//   }
 
// const sport = new sportscar();
// {
//     sport.start();
//     sport.drive();
//     sport.tubomode();
// } 


//task 5 

 class vehical{
    start()
     {
    console.log("vehical started");
     }
    types()
    {
        console.log("Bike ,Car ,Truck ");
    }
}

class bike extends vehical{
    model(){
        console.log("latest model of ATHER");
    }
    mft(){
        console.log("2026");
    }
}

class Car extends vehical{
     drive()
     {
        console.log("drive the car");
     }
}


 class sportscar extends Car
 {
     tubomode()
     {   
        console.log("Turbo mode on  ");
     }
  }

  const B =new bike();
  {
    B.start();
    B.mft();
    B.model();
  }
 
const sport = new sportscar();
{
    sport.start();
    sport.drive();
    sport.tubomode();
} 