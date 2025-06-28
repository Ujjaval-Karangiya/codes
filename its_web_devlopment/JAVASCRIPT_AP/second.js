//Arithmatic Operation

// let a = 5;
// let b = 2;

// console.log("a =" , a , "& b =",b );
// console.log("a + b =" , a+b);
// console.log("a - b =", a-b);
// console.log("a * b =", a*b);
// console.log("a / b =", a/b);
// console.log("a % b =", a%b);
// console.log("a ** b =", a**b); //5^2 = 25

//Unary Oparator

// let a = 5;
// let b = 2;
// a++;
//b--;
// console.log("a =", a, "& b =", b);
// console.log("a =" , a);
// console.log("--b =" , --b); //PreDecrement Operator

//Assingment Operator

// let a = 5;
// let b = 2;
// a += 4;  // a = a + 4
// b -= 1;   // b = b - 1
// console.log("a =" , a);
// console.log("b =" , b); 

//Comparison Operator

// let a = 5;
// let b = "2";

// console.log("a =", a, "& b =", b);
// console.log("a == b" , a == b);
// console.log("a === b" , a === b);
// console.log("a != b" , a != b);
// console.log("a !== b" , a !== b);
// console.log("a > b" , a > b);
// console.log("a <= b" , a <= b);

//Logical Operator

// let a = 6;
// let b = 5;

// console.log("cond1 && cond2 =" , a > b && a === b);
// console.log("cond1 || cond2 =" , a > b || a === b);
// console.log("!(a < b)" , !(a < b));

//Condition Statement

// let age = 19;

// if (age >= 18) {
//   console.log("You Can Vote");
// }
// else{
//   console.log("You CANNOT Vote");
// }


// let num = 18;

// if(num%2 === 0){
//   console.log(num ,"is Even");
// }
// else{
//   console.log(num , "is Odd");
// }


// let mode = "black";
// let color;

// if(mode === "black"){
//   color = "black";
// }
// else if(mode === "blue"){
//   color = "blue";
// }
// else if(mode === "aqua"){
//   color = "aqua";
// }
// else{
//   color = "white";
// }

// console.log(color);


//Ternary Operator

// let age = 19;

// let result = age >= 18? "Can Vote" : "Can't Vote"; //Simple if-else
// console.log(result);

//Prompt Statement

// let name = prompt("hello");
// console.log(name);


//Practice Exercise 1

// let  num = prompt("Enter a number:");

// if(num%5 === 0){
//   console.log(num ,"is multiple of 5");
// }
// else{
//   console.log(num ,"is NOT multiple of 5");
// }


//Practice Exercise 2

let score = prompt("Enter a Score(0-100)");
let grade;

if(score >= 90 && score <= 100){
  grade = "A";
}
else if(score >= 70 && score <= 89){
  grade = "B"
}
else if(score >= 60 && score <= 69){
  grade = "C"
}
else if(score >= 50 && score <= 59){
  grade = "D"
}
else{
  grade = "F";
}

console.log("Your grad is according to your score:" , grade);