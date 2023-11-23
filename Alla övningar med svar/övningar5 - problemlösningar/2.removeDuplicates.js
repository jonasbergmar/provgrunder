// 2. (3p) Skapa en funktion, removeDuplicates, som tar en array
// med element och returnerar en ny array där alla duplicerade
// element har tagits bort och endast unika element finns kvar.

let arr2 = ["apple", "mango", "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr2));

//ELLER
//davids sätt

function removeDuplicates(arr) {
  const unique = [];

  arr.forEach((item) => {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  });
  return unique;
}

console.log(removeDuplicates(["hej", "hej", "hopp"]));
