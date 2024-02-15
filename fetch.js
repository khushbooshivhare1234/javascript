const url = "https://cat-fact.herokuapp.com/facts";
const fact = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
  console.log("getting data");
  let response = await fetch(url);
  console.log(response);
  let data = await response.json();
  fact.innerText = data[0].text;
};
btn.addEventListener("click", getFacts);
