console.log("---- Oppgave 1 -----");
// første oppgave Func og loops
function formatText(str) {
  return str.trim().toLowerCase();
}
console.log(formatText("      LOREM ipsum  "));

console.log("---- Oppgave 2 -----");
// Endret til arrow function
const formatText2 = (str) => str.trim().toLowerCase();

console.log(formatText2("      LOREM ipsum  "));

console.log("---- Oppgave 3 --- for loop -----");
let threeFruits = ["apple", "banana", "mango"];

for (let i = 0; i < threeFruits.length; i++) {
  console.log(threeFruits[i]);
}
console.log("---- Oppgave 3 -- for of loop -----");

let fiveWords = ["one", "two", "three", "four"];
let words = document.getElementById("words");

for (let word of fiveWords) {
  console.log(word);

  let p = document.createElement("p");

  p.textContent = word;

  words.appendChild(p);
}

console.log("---- Oppgave 3 -- forEach -----");
let fiveWords2 = ["one", "two", "three", "four"];

fiveWords2.forEach((words) => {
  console.log(words);
});

console.log("---- Oppgave 3 -- while loop -----");

let fiveWord3 = ["one", "two", "three", "four"];

let i = 0;
while (i < fiveWord3.length) {
  console.log(fiveWord3[i]);
  i++;
}

console.log("---- Oppgave 4 -----");

let cars = ["Opel", "Toyota", "Rolls", "Lada"];

cars.forEach((item) => {
  console.log(item);
});

console.log("---- Oppgave 5 -----");

let bilMerke = ["Opel", "Toyota", "Rolls", "Lada"];

bilMerke.forEach((item, index) => {
  console.log(`Bilmerke: ${item} Index: ${index}`);
});

console.log("---- Oppgave forEach med Callback -----");

let fruits = ["Apple", "Banana", "Orange", "Banana"];

fruits.forEach((item, index) => {
  // console.log(`Bilmerke: ${item} Index: ${index}`);
  displayFruit(item, index); // Kall displayMerke og send med data
});

function displayFruit(item, index) {
  console.log(`DisplayFruit kalt med: Fruits: ${item} Index: ${index}`);
}

console.log("---- Oppgave 6 -----");

let array = [1, 2, 3, 4];

let arrowFunction = array.map((e) => e * 2);
console.log(arrowFunction);

console.log("-- Oppgave 6 --");

const nums = [1, 2, 3, 4, 5];
const nums2 = [4321, 43, 2, 897698, 321, 87];

function logEvenOfArray(arr) {
  let oddNumbers = arr.filter((element) => element % 2 !== 0);
  console.log(oddNumbers);
}

logEvenOfArray(nums);
logEvenOfArray(nums2);
