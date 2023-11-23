// Skriv en funktion, convertToUSD som konverterar värdena i currencies
// till USD. Använd exchangeRates för att göra uträkningen

// const exchangeRates = {
//   EUR: 1.12, // Euro till USD
//   GBP: 1.32, // Brittiskt pund till USD
//   JPY: 0.0094, // Japansk yen till USD
// };

// const currencies = [
//   { currency: "EUR", value: 100 }, // 100 Euro
//   { currency: "GBP", value: 50 }, // 50 Brittiskt pund
//   { currency: "JPY", value: 5000 }, // 5000 Japansk yen
// ];

// function convertToUSD(currencyArr) {
//   return currencyArr.map((item) => ({
//     currency: item.currency,
//     value: item.value * exchangeRates[item.currency],
//   }));
// }

// console.log(convertToUSD(currencies));
/* 
ska logga 
[{ currency: 'EUR', value: 112 },
{ currency: 'GBP', value: 66 },
{ currency: 'JPY', value: 47 }]
*/

//ELLER
//Davids sätt

const exchangeRates = {
  EUR: 1.12, // Euro till USD
  GBP: 1.32, // Brittiskt pund till USD
  JPY: 0.0094, // Japansk yen till USD
};

const currencies = [
  { currency: "EUR", value: 100 }, // 100 Euro
  { currency: "GBP", value: 50 }, // 50 Brittiskt pund
  { currency: "JPY", value: 5000 }, // 5000 Japansk yen
];

function convertToUSD(currencyArr) {
  const usdArr = currencyArr.map((item) => {
    const usdValue = exchangeRates[item.currency] * item.value;
    return { ...item, value: usdValue };
    // item.value = usdValue;
    // return item;
  });
  return usdArr;
}

console.log(convertToUSD(currencies));
