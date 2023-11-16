// 4 (2p) Använd map för att skapa en ny array fastCars där alla bilar har speed: 100.

const cars = [
  { type: "Volvo", speed: 50 },
  { type: "Ford", speed: 80 },
  { type: "Opel", speed: 60 },
];

const fastCars = cars.map((car) => {
  return { ...car, speed: 100 }; // Gör en kopia av arrayen med spread operator. ...car plockar type och ändrar bara speed.
});

console.log(fastCars);
