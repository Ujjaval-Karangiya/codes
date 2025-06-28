//SYNCRONOUS IN JS

// console.log("one");
// console.log("two");
// console.log("three");

// function hello() {
//   console.log("hello");
// };


//ASYNCRONOUS IN JS

// console.log("one");
// console.log("two");

// setTimeout(() => {
//   console.log("hello");
// }, 2000); //Timeout in MS

// console.log("three");
// console.log("four");


//CALLBACK

// function sum(a, b){
//   console.log(a + b);
// }

// function claculator(a, b, sumCallback) {
//   sumCallback(a, b);
// }

// claculator(1, 2, sum);



//CALLBACK HELL

// function getData(dataId, getNextData){
//   setTimeout(() => {
//     console.log("data", dataId);
//     if(getNextData){
//       getNextData();
//     }
//   }, 2000)
// };

// getData(1, () => {
//   getData(2, () => {
//     getData(3);
//   });
// });



//PROMISES

// let promise = new Promise((resolve, reject) => {
//   console.log("This is a promise");
//   resolve("success");
// });

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//       console.log("This is a promise");
//       resolve("success");
//       // reject("error");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//   console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//   console.log("rejected", err);
// });



//PROMISES CHAIN

// function asycFun1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("success");
//     }, 4000)
//   });
// }

// function asycFun2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2");
//       resolve("success");
//     }, 4000)
//   });
// }

// console.log("fatching data1....")
//   asycFun1().then((res) => {
//   console.log("fatching data2...")
//   asycFun2().then((res) => { });
// });



// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//     }, 2000);
//   });
// }

// getData(1)
//   .then((res) => {
//     return getData(2);
//   })
//   .then((res) => {
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   })



// ASYNC & AWAIT

// async function hello(){
//   console.log("hello");
// }

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("weather data");
//       resolve(200);
//     }, 2000);
//   });
// }

// async function getWeatherData() {
//   await api();
//   await api();
// }


// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//     }, 2000);
//   });
// }

// async function getAllData() {
//   console.log("geting data1.......");
//   await getData(1);
//   console.log("geting data2.......");
//   await getData(2);
//   console.log("geting data3.......");
//   await getData(3);
// }


//IIFE

// (async function() {
//   console.log("geting data1.......");
//   await getData(1);
//   console.log("geting data2.......");
//   await getData(2);
//   console.log("geting data3.......");
//   await getData(3);
// })();