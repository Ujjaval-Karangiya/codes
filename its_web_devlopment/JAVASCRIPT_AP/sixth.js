// let h1 = document.querySelector("h1")

// console.dir(h1.innerText);

// h1.innerText = h1.innerText + " I Learn JAVASCRIPT";


// let divs = document.querySelectorAll(".box");

// let idx = 1;
// for(div of divs){
//   div.innerText = `new uniqu div ${idx}`;
//   idx++;
// }

// divs[0].innerText = "new unique value 1"; 
// divs[1].innerText = "new unique value 2"; 
// divs[2].innerText = "new unique value 3"; 


// let div = document.querySelector("div");

// div.style.backgroundColor = "red";

// div.innerText = "Hello!";

// div.style.fontSize = "26px";



// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me!"
// console.log(newBtn); 

// let div = document.querySelector("div")
// div.append(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hii ! I am new</i>";

// document.querySelector("body").prepend(newHeading);
// newHeading.remove();



//PRACTICE EXERCISE 1

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
document.querySelector("body").prepend(newBtn);

//PRACTICE EXERCISE 2

let para = document.querySelector("p");
para.classList.add("newClass");