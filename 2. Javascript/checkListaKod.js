//ALLA REPON https://github.com/davidshore/chas_webbutveckling_grundkurs/tree/main

// https://github.com/davidshore/chas_webbutveckling_grundkurs/tree/main/v42-js-intro-variabler-funktioner

// Variabler och Typer
let myBoolean = true;
let myNull = null;
let myUndefined = undefined;
let myString = "Hello, World!";
let myNumber = 42;
let myObject = { key: "value" };
let myArray = [1, 2, 3];

console.log(myString);

// CRUD-operationer på Variabler
let myVariable = "Initial value";
console.log(myVariable);

// Update
myVariable = "Updated value";
console.log(myVariable);

// Delete
myVariable = null;
console.log(myVariable);

// https://github.com/davidshore/chas_webbutveckling_grundkurs/tree/main/v43-arrayer-objekt

// CRUD-operationer på Objekt och Arrayer
let myObject = { key: "value" };

// Create
myObject.newKey = "New value";
console.log(myObject);

// Read
console.log(myObject.key);

// Update
myObject.key = "Updated value";
console.log(myObject);

// Delete
delete myObject.key;
console.log(myObject);

// Operatorer
let x = 10;
let y = 5;

// Matematiska operatorer
let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;

// Jämförelseoperatorer
let isEqual = x === y;
let isNotEqual = x !== y;
let isGreater = x > y;
let isLess = x < y;
let isGreaterOrEqual = x >= y;
let isLessOrEqual = x <= y;

// Booleans och If-satser
let condition1 = true;
let condition2 = false;

if (condition1 && condition2) {
  console.log("Båda villkoren är sanna.");
} else if (condition1 || condition2) {
  console.log("Minst ett av villkoren är sant.");
} else {
  console.log("Inget av villkoren är sant.");
}

// Strängar
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // Alternativt: `${firstName} ${lastName}`
console.log(fullName);

let greeting = `Hej, ${firstName}!`;
console.log(greeting);

let substring = fullName.substring(0, 4);
console.log(substring);

let upperCaseName = fullName.toUpperCase();
console.log(upperCaseName);

for (let i = 0; i < fullName.length; i++) {
  console.log(fullName[i]);
}

let firstLetter = fullName[0];
console.log(firstLetter);

// Arrayer
let myArray = [1, 2, 3, 4, 5];

// Create
myArray.push(6);

// Read
console.log(myArray[2]);

// Update
myArray[1] = 10;

// Delete
myArray.pop();

// Loopa igenom med for-loop
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// Loopa igenom med forEach
myArray.forEach((item) => console.log(item));

// Filtrera array
let filteredArray = myArray.filter((item) => item > 3);
console.log(filteredArray);

// Objekt
let myObject = { key1: "value1", key2: "value2" };

// Create
myObject.newKey = "New value";

// Read
console.log(myObject.key1);

// Update
myObject.key1 = "Updated value";

// Delete
delete myObject.key2;

// Loopa igenom objekt med for...in
for (let key in myObject) {
  console.log(`${key}: ${myObject[key]}`);
}

// Funktioner
// Skapa en funktion
function greet(name) {
  console.log(`Hej, ${name}!`);
}

// Anropa funktionen
greet("Alice");

// Arrow-function
const add = (a, b) => a + b;

// Scope
let outsideVariable = "Jag är utanför funktionen.";

function myFunction() {
  let insideVariable = "Jag är innanför funktionen.";
  console.log(outsideVariable); // Ok
  console.log(insideVariable); // Ok
}

console.log(outsideVariable); // Ok
// console.log(insideVariable); // Error: undefined

// https://github.com/davidshore/chas_webbutveckling_grundkurs/tree/main/v44-scope-spread-destructure

// Spread och Destructure
// Spread för arrayer
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2);

// Destructure för arrayer
let [first, second, ...rest] = arr2;
console.log(first, second, rest);

// Spread för objekt
let obj1 = { key1: "value1", key2: "value2" };
let obj2 = { ...obj1, key3: "value3" };
console.log(obj2);

// Destructure för objekt
let { key1, key2, ...otherKeys } = obj2;
console.log(key1, key2, otherKeys);

// https://github.com/davidshore/chas_webbutveckling_grundkurs/tree/main/v45-dom-api

// DOM Manipulation
// CRUD-operationer på HTML-element
// Skapa ett nytt element
let newElement = document.createElement("p");
newElement.textContent = "Detta är ett nytt element.";

// Lägg till det nya elementet i body
document.body.appendChild(newElement);

// Uppdatera texten i det nya elementet
newElement.textContent = "Uppdaterat innehåll.";

// Ta bort det nya elementet
document.body.removeChild(newElement);

// Ladda ner och skapa HTML från data
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => {
    let newPost = document.createElement("div");
    newPost.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
    document.body.appendChild(newPost);
  })
  .catch((error) => console.error("Error:", error));

// Eventhantering
// Skapa en knapp
let myButton = document.createElement("button");
myButton.textContent = "Klicka på mig";

// Lägg till en eventlyssnare
myButton.addEventListener("click", function () {
  alert("Knappen blev klickad!");
});

// Lägg till knappen i body
document.body.appendChild(myButton);

// Fetch, Promise, Then, Async/Await
// Ladda ner data med Fetch och använda async/await
async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();

// Problemlösning
// Använd teknikerna för problemlösning
// Exempel: Enkel to-do-lista med local storage
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function addTodo(todo) {
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeTodo(index) {
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function displayTodos() {
  todos.forEach((todo, index) => {
    console.log(`${index + 1}. ${todo}`);
  });
}

addTodo("Gå ut med hunden");
addTodo("Läsa en bok");
displayTodos();
removeTodo(0);
displayTodos();
