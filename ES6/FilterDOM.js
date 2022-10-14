// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
// los streamers que incluyan la palabra introducida en el input. De esta forma, si
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers = [
    { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
    { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
    { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
    { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
  ];

  
const inputSelector = document.querySelector("input");

function search(text) {
  const streamersFiltered = streamers.filter((streamer) =>
    streamer.name.toLowerCase().includes(inputSelector.value.toLowerCase())
  );
  console.log(streamersFiltered);
}

inputSelector.addEventListener("input", search);

// 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
// los streamers que incluyan la palabra introducida en el input. De esta forma, si
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i',
// me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
// En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.
// const streamers = [
// 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
// 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
// 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
// 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
// ];

const button = document.querySelector("button");
const inputButton = document.querySelector("[data-function = toFilterGamers]");

const search1 = (event) => {
      const streamersFiltered = streamers.filter((streamer) =>
      streamer.name.toLowerCase().includes(inputButton.value.toLowerCase())
    );
    console.log(streamersFiltered);
}

button.addEventListener("click", search1);

// Solución de Notion con event.target
// const filterStreamers = (event) => {
//     const input$$ = event.target.previousElementSibling;
//     const filteredStreamers = streamers.filter((streamer) =>
//       streamer.name.toLowerCase().includes(input$$.value.toLowerCase())
//     );
//     console.log(filteredStreamers);
//   };
  
//   const button$$ = document.querySelector(
//     '[data-function="toShowFilterStreamers"]'
//   );
  
//   button$$.addEventListener("click", filterStreamers);