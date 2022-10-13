// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un
// console.log(). Para ello, es necesario que crees un .html y un .js.

fetch("https://api.agify.io?name=michael")
  .then((Agify) => Agify.json())
  .then((Agify) => console.log(Agify));

// 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando
// fetch() para hacer una consulta a la api cuando se haga click en el botón,
// pasando como parametro de la api, el valor del input.
const baseUrl = "https://api.nationalize.io";
const button$$ = document.querySelector("button");
const input$$ = document.querySelector("input");

const search = () => {
  fetch(`${baseUrl}?name=${input$$.value}`)
    // fetch(baseUrl + "?name=" + input$$.value)
    .then((data) => data.json())
    .then((data) => {
      createText(data);
      createButton(data);
    });
};

button$$.addEventListener("click", search);

// 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser
// de MZ.

const createText = (data) => {
  const description = document.createElement("p");

  let text = `El nombre ${data.name} tiene `;

  for (const country of data.country) {
    let percentage = Math.floor(country.probability * 100);
    country === data.country[data.country.length - 1]
      ? (text += `y un ${percentage} porciento de ser de ${country.country_id}.`)
      : (text += `un ${percentage} porciento de ser de ${country.country_id}, `);
  }

  description.textContent = text;
  document.body.appendChild(description);
};

// 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno
// de los p que hayas insertado y que si el usuario hace click en este botón
// eliminemos el parrafo asociado.

const createButton = (data) => {
  for (const country of data.country) {
    let paragraph = document.createElement("p");
    let percentage = Math.floor(country.probability * 100);
    paragraph.textContent = `El nombre ${data.name} tiene un ${percentage} porciento de 
    ser de ${country.country_id}.`;

    const pButton = document.createElement("button");
    pButton.textContent = "x";
    pButton.style.marginLeft = "20px";
    // pButton.addEventListener("click", function remover() {
    //   paragraph.remove();
    // });
    pButton.addEventListener("click", () => paragraph.remove());

    paragraph.appendChild(pButton);
    document.body.appendChild(paragraph);
  }
};
