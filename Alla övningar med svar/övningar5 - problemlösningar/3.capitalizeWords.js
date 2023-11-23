// 3. (3p) Skriv en funktion, capitalizeWords, som tar en array av
// strängar som input och returnerar en ny array där varje
// ord börjar med en stor bokstav.

// function capitalizeWords(arr) {
//   return arr.map((word) => {
//     const capitalizedFirst = word.charAt(0).toUpperCase();
//     const rest = word.slice(1).toLowerCase();
//     return capitalizedFirst + rest;
//   });
// }

// const words = ["heJ", "pÅ", "dIg", "dU"];
// console.log(capitalizeWords(arr));

//Eller enklare med substring()

function capitalizeWords(arr) {
  return arr.map((word) => {
    const firstLetter = word.substring(0, 1);
    const theRest = word.substring(1);
    return firstLetter.toUpperCase() + theRest.toLowerCase();
  });
}

console.log(capitalizeWords(["hej", "på", "dIg", "dU"]));
