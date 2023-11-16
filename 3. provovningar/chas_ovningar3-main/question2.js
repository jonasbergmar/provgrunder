// 2. (3p) Skapa ett inputfält och en knapp på html-sidan. När man klickar på
// knappen ska det man skrev i input-fältet synas nedanför input-fältet i en div.
const getInput = document.querySelector("#input");
const submitBtn = document.querySelector("#button");
const getTextResult = document.querySelector("#resultText");

submitBtn.addEventListener("click", (e) => {
  const textResult = getInput.value;
  getTextResult.textContent = textResult;
});
