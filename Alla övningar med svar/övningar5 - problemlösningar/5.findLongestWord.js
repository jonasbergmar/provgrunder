// Skapa en funktion, findLongestWord, som tar en sträng som input
// och returnerar det längsta ordet i strängen.

// function findLongestWord(str) {
//   let strSplit = str.split(" ");
//   let longestWord = 0;
//   for (let i = 0; i < strSplit.length; i++) {
//     if (strSplit[i].length > longestWord) {
//       longestWord = strSplit[i].length;
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

function findLongestWord(str) {
  let strSplit = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord.length) {
      longestWord = strSplit[i];
    }
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
