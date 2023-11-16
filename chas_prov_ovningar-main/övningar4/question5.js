// 5. Responsive Users 3p
// Ladda ner users från denna url: https://jsonplaceholder.typicode.com/users
// För varje user ska name, email och city visas i en div och placeras under varandra.
// I desktop-vy ska divarna för varje user visas i 3 kolumner.
// I mobil-vy ska divarna för varje user visas i en kolumn med 100% width.
const containerEl = document.createElement("div");
containerEl.setAttribute("class", "container");
document.body.appendChild(containerEl);

async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  data.forEach((userData) => {
    const userEl = document.createElement("div");
    userEl.setAttribute("class", "section");
    userEl.innerHTML = `<h3>${userData.name} ${userData.email} ${userData.address.city}</h3>`;
    containerEl.appendChild(userEl);
  });
}

containerEl.style.display = "grid";

const mediaQuery = window.matchMedia("(min-width: 768px)");

function handleScreenChange(e) {
  if (e.matches) {
    // Desktop view
    containerEl.style.gridTemplateColumns = "1fr 1fr 1fr";
  } else {
    // Mobile view
    containerEl.style.gridTemplateColumns = "1fr";
  }
}

handleScreenChange(mediaQuery);

// Attach event listener to handle changes in screen width
mediaQuery.addListener(handleScreenChange);

getUser();
