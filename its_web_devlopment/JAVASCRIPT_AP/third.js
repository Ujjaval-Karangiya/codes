//For Loop

// for(let count = 1; count <= 5; count++){
//   console.log("Duhaiya Rushik A.");
// }


//Calculate 1 to 5 sum

// let sum = 0;
// for(let i = 0; i <= 5; i++){
//   sum = sum + i;
// }
// console.log("sum =" , sum);
// console.log("Loop has ended");


//While Loop

// let i = 1;
// while(i <= 10){
//   console.log("Rushik");
//   i++;
// }


//do-while Loop

// let i = 18;
// do{
//   console.log("Rushik");
//   i++;
// }while(i <= 10);


//for-of-loop

// let str = "Dudhaiya Rushik A."
// let length = 0;
// for(let val of str){
//   console.log("val = " , val);
//   length ++;
// }

// console.log("String Length is =", length);


//for-in-loop

// const student = {
//   name: "Rushik",
//   age: 19,
//   cgpa: 8,
//   isPass: true,
// };

// for(let key in student){
//   console.log("key=" , key ," value =", student[key]);
// }


//Practice Exercise 1

// for (let num = 0; num <= 100; num++) {
//   if (num % 2 === 0) {
//     console.log("num =" , num)
//   }
// }


//Practice Exercise 2

// let gameNum = 18;
// let userNum = prompt("Guass the Number: ");

// while(userNum != gameNum){
//   userNum = prompt("You enter the wrong answer.guass the number again");
// }
// console.log("Congratulations, you enter the right number");



//String

// let str = "Rushik";
// console.log(str);
// console.log(str.length);
// console.log(str[0]);


//Template Literals

// let obj = {
//   item: "pen",
//   price: 10,
// };

// let output = `The price of ${obj.item} is ${obj.price} rupee`;
// console.log(output);


//Escape Character
// console.log("Rushik\nDudhaiya");
// console.log("Rushik\tDudhaiya");
// let str = "Dudhaiya\tRushik";
// console.log(str.length); //15

// let str1 = "Dudhaiya Rushik";
// console.log(str.length);
// console.log(str1.toUpperCase());
// console.log(str1.toLowerCase());

// let str2 = "   Learn to JS      ";
// console.log(str2.trim());

// let str3 = "Hello"
// console.log(str3.slice(1 , 5));

// let res = str1 + str3;
// console.log(res);

// console.log(str3.replaceAll("H" , "y"));

// console.log(str1.charAt(9));



//Practice Exercise

let fullName = prompt("Enter you fullname without space");

let username = "@" + fullName + fullName.length;
console.log(username);