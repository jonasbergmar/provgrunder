// 3. Skapa en div med ett B. Så här: <div>B</div>
// Lägg det mellan A och C på html-sidan.
const boxC = document.querySelector("#C");
const newDivB = document.createElement("div");
newDivB.textContent = "B";
newDivB.style.color = "white";
newDivB.style.fontSize = "2rem";
element.insertBefore(newDivB, boxC);
