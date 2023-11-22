// 7.1 (3p) Hämta data med fetch från denna url: https://restcountries.com/v3.1/all
// Visa följande för varje land:
// Officiellt namn
// Valuta
// bild på flagga med tillhörande alt-text

// 7.2 (3p) Gör sidan responsive:
// I desktop-vy ska varje land visas i 3 kolumner.
// I mobil-vy ska varje land visas i en kolumn med 100% width.

const countrysContainer = document.getElementById("countrysContainer");

async function fetchData() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  console.log(data);

  data.forEach((country) => {
    const countryDiv = document.createElement("div");
    countryDiv.setAttribute("class", "country");

    const nameElement = document.createElement("h1");
    nameElement.textContent = country.name.official;

    const currencyElement = document.createElement("h2");
    currencyElement.textContent = Object.keys(country.currencies);

    const flagElement = document.createElement("img");
    flagElement.innerHTML = `<img>${country.flags.png.alt}</img>`;
    flagElement.src = country.flags.png;
    flagElement.alt = country.flags.alt;
    flagElement.width = 150;
    flagElement.height = 150;

    countryDiv.appendChild(nameElement);
    countryDiv.appendChild(currencyElement);
    countryDiv.appendChild(flagElement);
    countrysContainer.appendChild(countryDiv);
  });
}
fetchData();
