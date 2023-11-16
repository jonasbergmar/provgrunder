// 4.1 (3p) Skriv kod som lägger till 10 button element till html-sidan.
// Varje button ska innehålla en klass "primary"
// och texten "Button" + talet 1 till 10.
// Så här: <button class="primary">Button1</button> <button class="primary">Button2</button> ...
// Koden kan använda en for-loop
const btnContainer = document.querySelector("#buttonContainer");

function createButton(index) {
  for (let i = 1; i <= 10; i++) {
    const newButton = document.createElement("button");
    btnContainer.appendChild(newButton);
    newButton.setAttribute("class", "primary");
    newButton.textContent = "button" + i;
    newButton.addEventListener("click", function () {
      if (newButton.className === "primary") {
        newButton.className = "secondary";
      } else newButton.className = "primary";
    });
  }
}
createButton();
// 4.2 (2p) Lägg till addEventlistener på varje button.
// Vid eventet "click" på button ska klassen ändras till "secondary"
