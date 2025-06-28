//PROTOTYPE IN JS

// const student = {
//   name: "Dudhaiya Rushik",
//   marks: 94,
//   printMarks: function() {
//     console.log("marks =", this.marks);
//   }
// }

// const employe = {
//   calcTax()  {
//     console.log("the tax rate is 10%");
//   },
// };

// const karanArjun = {
//   salary: 50000,
//   calcTax() {
//     console.log("the tax is 20%"); //Higher Priority
//   }
// };
// const karanArjun2 = {
//   salary: 50000,
// };
// const karanArjun3 = {
//   salary: 50000,
// };

// karanArjun.__proto__ = employe;
// karanArjun2.__proto__ = employe;
// karanArjun3.__proto__ = employe;


//CLASSES & CONSTRUCTOR IN JS

// class ToyotaCar {
//   constructor(brand, mileage){
//     console.log("create in object");
//     this.brand = brand;
//     this.mileage = mileage;
//   }
//   start() {
//     console.log("Start");
//   }

//   stop() {
//     console.log("Stop");
//   }

//   setBrand(brand) {
//     this.brandName = brand;
//   }
// };

// let fortuner = new ToyotaCar("Fortuner", 20);
// console.log(fortuner)
// let lexus = new ToyotaCar("Lexus", 25);
// console.log(lexus);


//INHERITANCE IN JS

// class Parent{
//   hello(){
//     console.log("Hello");
//   }
// }

// class Child extends Parent{}

// let obj = new Child();

// class Person{
//   constructor(name){
//     this.spices = "homo sapience";
//     this.name = name;
//   }
//   eat(){
//     console.log("Eat");
//   }
//   sleep(){
//     console.log("Sleep");
//   }
// }

// class Engineers extends Person{
//   constructor(){
//     super(name); //To involk parent class constructor
//   }
//   work(){
//     super.eat();
//     console.log("solve problem, build something")
//   }
// }

// let engkObj = new Engineers("Rushik");




//PRACTICE EXERCISE 1

let Data = "secrete information";
class User {
  constructor(name, email){
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("data =", Data)
  } 
}

class Admin extends User{
  constructor(name, email){
    super(name, email);
  }
  editData(){
    Data = "some new data";
  }
}

let student1 = new User("abc", "@abc");
let student2 = new User("abd", "@abd");

let admin1 = new Admin("admin", "@admin");