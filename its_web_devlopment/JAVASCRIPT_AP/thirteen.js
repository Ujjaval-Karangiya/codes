const URL = "https://cat-fact.herokuapp.com/facts";

let paraFact = document.querySelector("#fact");

const getFacts = async () => {
  console.log("getting data.......");
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  paraFact.innerText = data[1].text;
};