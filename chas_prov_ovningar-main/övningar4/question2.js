// 10.1 Hämta todo-data från denna url: https://jsonplaceholder.typicode.com/todos/
// Skriv ut med html på skärmen titeln på alla todo-objekt som har
// userId: 1
// 10.2 Lägg till en done-knapp under varje titel. Om todo-objektet är genomfört,
// alltså completed: true, så ska det stå "Undo" på knappen annars "Done"

// 10.3 Knappen ska kunna växla mellan "Undo" och "Done" när man trycker på den.
// Om det står "Undo" på knappen ska titeln vara genomstruken, alltså i css:
// text-decoration: line-through;
// Annars ska den inte vara det.
// const todosElement = document.createElement("div");

// async function getTodos() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
//   const data = await response.json();

//   const filteredData = data.filter((todo) => todo.userId == 1);
//   filteredData.forEach((todo) => {
//     const btn = document.createElement("button");
//     const todoEl = document.createElement("div");

//     if (todo.completed === true) {
//       btn.textContent = "Undo";
//       todoEl.style.textDecoration = "line-through";
//     } else {
//       btn.textContent = "Done";
//     }

//     btn.addEventListener("click", (e) => {
//       const element = e.currentTarget;
//       if (todo.completed) {
//         btn.textContent = "Done";
//         todoEl.style.textDecoration = "none";
//       } else {
//         btn.textContent = "Undo";
//         todoEl.style.textDecoration = "line-through";
//       }
//       todo.completed = !todo.completed;
//     });

//     todoEl.innerHTML = `<h2>${todo.title} ${todo.userId} </h2> `;
//     document.body.appendChild(todosElement);
//     todosElement.appendChild(todoEl);
//     todoEl.appendChild(btn);
//   });

//   console.log(data);
// }
// getTodos();
