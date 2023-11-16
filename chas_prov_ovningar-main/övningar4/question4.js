// 4. Hämta och visa foton. 3p
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 20 fotona på sidan.
// const photosElement = document.createElement("div");
// document.body.appendChild(photosElement);

// async function getPhotos() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/photos");
//   const data = await response.json();
//   const filteredData = data.filter((photo) => photo.id <= 20);

//   filteredData.forEach((photo) => {
//     const photoEl = document.createElement("img");
//     photoEl.width = 100;
//     photoEl.height = 100;
//     photoEl.src = photo.url;
//     photosElement.appendChild(photoEl);
//   });
//   console.log(filteredData);
//   console.log(data);
// }

// getPhotos();
