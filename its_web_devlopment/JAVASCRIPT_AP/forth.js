//Arrays

// let marks = [90, 80, 95, 85, 93];
// console.log(marks);
// console.log(marks.length);
// let heroes = ["Ironman", "Thor", "Hulk", "Antman", "Batman", "Spiderman"];
// console.log(heroes);

// for(let i = 0; i < heroes.length; i++){
//   console.log(heroes[i]);
// }


//for-of loop

// let cities = ["Jamnagar", "Ahmedabad", "Dwarka", "Surat", "Mumbai"];
// for(let city of cities){
//   console.log(city.toUpperCase());
// }


//Practice Exercise 1

//let marks = [85, 97, 44, 37, 76, 60];
// console.log(marks);
// sum = 85 + 97 + 44 + 37 + 76 +60;
// console.log(sum/6);

// let sum = 0;
// for(let val of marks){
//   sum += val;
// }

// let avg = sum/marks.length;
// console.log(`avrage marks of class = ${avg}`);


//Practice Exercise 2

//let items = [250, 645, 300, 900, 50];

// let i= 0;
// for(let val of items){
//   let offer = val/10;
//   items[i] = items[i] - offer;
//   console.log(`valuee after offer ${items[i]}`);
//   i++;
// }

// for(let i = 0; i<items.length; i++){
//   let offer = items[i]/10;
//   items[i] -= offer; 
// }

// console.log(items);


//Push, Pop, toString

// let foodItems = ["potato", "apple", "tomato", "chips"];
// console.log(foodItems)

// foodItems.push("banana", "burger", "paneer");
// foodItems.pop();

// console.log(foodItems);
// console.log(foodItems.toString());


//CONCAT, UNSHIFT, SHIFT

// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["batman", "superman"];
// let indianHeroes = ["saktiman", "krish"]

// marvelHeroes.unshift("antman");
// let val = marvelHeroes.shift();

// let heroes = marvelHeroes.concat(dcHeroes, indianHeroes);
// console.log(heroes);
// console.log(marvelHeroes);
// console.log("deleted", val);


//SLICE

// let marvelHeroes = ["thor", "spiderman", "ironman", "antman","Dr.Strange"];

// console.log(marvelHeroes);

// console.log(marvelHeroes.slice(1, 3));


//SPLICE

//let arr = [18, 16, 19, 45, 10];
//arr.splice(1, 2 , 17, 1);

//ADD ELEMENT
//arr.splice(1, 0, 20);

//DELETE ELEMENT
//arr.splice(1, 2);

//REPLACE ELEMENT
//arr.splice(3, 1, 3);

// arr.splice(2); //Delete the next given index
// console.log(arr)


//PRECTICE EXERCISE 3

// let compnies = ["Bloomberg","Microsoft","Uber","Google","IBM", "Netflix"];
// console.log(compnies);

//compnies.shift()
//console.log(compnies);

// compnies.splice(2, 1, "Ola");
// console.log(compnies);

// compnies.push("Amazon");
// console.log(compnies);



