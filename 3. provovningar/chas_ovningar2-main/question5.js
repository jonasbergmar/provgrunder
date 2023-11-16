// 7.1 (2p) Skriv klart funktionen updatePeople
// som lägger till en property:
// adult: true
// om personen i arrayen är 18 år eller över annars
// en property:
// adult: false
// funktionen ska returnera den uppdaterade arrayen.

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 35 },
  { name: "Fred", age: 19 },
  { name: "Alice", age: 6 },
];

const updatePeople = (peopleArr) => {
  peopleArr.forEach((person) => {
    person.adult = person.age >= 18;
  });
  return peopleArr;
};
const updatedPeople = updatePeople(people);
console.log(updatedPeople);

//7.2 (2p) Gör en funktion som filtrerar ut bara adults.

const filteredAdults = people.filter((peopleArr) => {
  const adults = peopleArr.age >= 18;
  return adults;
});

console.log(filteredAdults);
