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

function findLongestWord(sentence) {
  //split delar upp meningen i ord på.
  let words = sentence.split(" ");
  let longestWord = "";
  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
