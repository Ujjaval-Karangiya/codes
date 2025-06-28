//FUNCTIONS

// function myFunction() {
//   console.log("We eneter the web page");
//   console.log("We are learning JS");
// }

// myFunction();

// function sum(x,y) {
//   console.log(x + y);
// }

// console.log(18 + 17);

// function sum(x, y){ //parameter is block of code like local variable
//   s = x + y;
//   console.log("before return");
//   return s;
//   console.log("after return");
// }
// let val = sum (18 , 18);
// console.log(val);


//ARROW FUNCTION

// let arrowMul = (a, b) => {
//   return a*b;
// }

// const printHello = () => {
//   console.log("hello!");
// }


//PRACTICE EXERCISE

// function countVowels(str) {
//   let count = 0;
//   for(const char of str){
//   if (char === "a" || char === "e" || char === "i" || char === "o" || 
//   char === "u" ) {
//     count++
//   }
// }
//   return count;
// }

//ARROW FUNCTION 

// const countVow = (str) => {
//   let count = 0;
//   for(const char of str){
//   if (char === "a" || char === "e" || char === "i" || char === "o" || 
//   char === "u" ) {
//     count++;
//   }
// }
//   return count;
// }


//FOR EACH LOOP

// let arr = ["jamnagar", "mumbai", "ahmedabad"];

// arr.forEach((val , idx, arr) => {
//   console.log(val.toUpperCase() , idx, arr);
// })


//PRACTICE EXERCISE

// let nums = [1, 2, 3, 4, 5];

// nums.forEach((nums) => {
//   console.log(nums*nums);
// });


//MAP

// let nums =[52, 40, 35];

// let newArr = nums.map((val) => {
//   return val * val;
// });

// console.log(newArr);


//FILTER

// let nums = [1, 2, 3, 4, 5, 6, 7, 8];

// let newArr = nums.filter((val) => {
//   return val % 2 === 0;
// });

// console.log(newArr);


//REDUSE

// let nums = [1, 2, 3, 4, 8, 7, 5, 6, 25, 20];

// const output = nums.reduce((res, curr) => {
//   return res > curr ? res : curr;
// });

// console.log(output);


//PRACTICE EXERCISE

// let marks = [90, 85, 87, 95, 87];

// let toppers = marks.filter((val) => {
//   return val >= 90;
// });

// console.log(toppers);



//PRACTICE EXERCISE

let n = prompt("enter a number:");

let arr = [];

for(let i = 1; i<=n; i++){
  arr[i-1] = i;
}

console.log(arr);

let sum = arr.reduce((res, curr) => {
  return res + curr;
});

console.log("sum =", sum);

let factorial = arr.reduce((res, curr) => {
  return res * curr;
});

console.log("factorial =", factorial);