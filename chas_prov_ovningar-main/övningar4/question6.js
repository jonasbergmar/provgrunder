// 9.1 Skapa ett nytt object car2 med spread operatorn ...
// Det nya objektet ska updatera speed till 200.

// 9.1 Skapa ett nytt object car2 med spread operatorn ...
// Det nya objektet ska updatera speed till 200.

const car = {
  name: "Volvo",
  speed: 100,
};

const car2 = { ...car, speed: 200 };
console.log(car2);

// 9.2 Skapa två variabler name och speed genom
// destructuring av objektet car.

const { name: names, speed } = car; //Bryter isär car och skapar 2 nya variabler
console.log(names, speed);
