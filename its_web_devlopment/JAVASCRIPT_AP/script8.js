 let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//   console.log("button was clicked");
//   console.log(evt)
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX , evt.clientY);
// }

// btn1.addEventListener("click" , (evt) => {
//   console.log("btn1 was clicked - handler 1");
// });

// btn1.addEventListener("click" , (evt) => {
//   console.log("btn1 was clicked - handler 2");
// });

// const handler3 = () => {
//   console.log("btn1 was clicked - handler 3");
// };

// btn1.addEventListener("click" , handler3 )

// btn1.addEventListener("click" , (evt) => {
//   console.log("btn1 was clicked - handler 4");
// });

// btn1.removeEventListener("click", handler3);


// let div = document.querySelector("div")
// div.onmousemove = (evt) => {
//   console.log(evt)
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX , evt.clientY);
// };


//PRACTISE EXERCISE

let modeBtn = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");

modeBtn.addEventListener("click" , () => {
  if(currMode === "light"){
    currMode = "dark";
    //document.querySelector("body").style.backgroundColor = "black";
    body.classList.add("dark");
    body.classList.remove("light");
  }
  else{
    currMode = "light";
    //document.querySelector("body").style.backgroundColor = "white";
    body.classList.add("light");
    body.classList.remove("dark")
  }
  console.log(currMode);

});

