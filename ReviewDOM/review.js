// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul$$ = document.createElement("ul");
for (country of countries){
    let li$$ = document.createElement("li");
    li$$.textContent = country;
    ul$$.appendChild(li$$);
}

document.body.appendChild(ul$$);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
let remover = document.querySelector(".fn-remove-me");
remover.remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const divSelector$$ = document.querySelector("[data-function = printHere]")
                    // document.querySelector("[data-function]");
                    // document.querySelector("div");

const carList$$ = document.createElement("ul");

for  (const car of cars){
    const carType$$ = document.createElement("li");
    carType$$.innerText = car;
    carList$$.appendChild(carType$$);
}
divSelector$$.appendChild(carList$$);


// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const countries1 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

// for (const country of countries1){
//     let divList$$ = document.createElement("div");

//     let title$$ = document.createElement("h4");
//     title$$.textContent = country.title;
//     divList$$.appendChild(title$$);
    
//     let img$$ = document.createElement("img");
//     // img$$.setAttribute("src", country.imgUrl);
//     img$$.src = country.imgUrl;
//     divList$$.appendChild(img$$);
    
//     document.body.appendChild(divList$$);
// }

// Solución del Notion. Más bonita (Template literals)
for (const country of countries1) {
    let createCountryItem = document.createElement("div");
    createCountryItem.innerHTML = `<h4>${country.title}</h4><img src=${country.imgUrl} />`;
    
    // Sin Template literals
    // createCountryItem.innerHTML = "<h4>" + country.title + "</h4> <img src =" + country.imgUrl + "/>";
    
    document.body.appendChild(createCountryItem);
  }



// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.

const buttonRemover = document.createElement("button");
buttonRemover.textContent = "Delete the last element";

function lastElementRemover () {
    let allDivs = document.querySelectorAll("div");
    allDivs[allDivs.length - 1].remove();
}

buttonRemover.addEventListener("click", lastElementRemover);
// buttonRemover.addEventListener("click", () => lastElementRemover()); 
// Para que no llame a la función y se ejecute inmediatamente. Útil si quieres poner parametro a la función.

document.body.appendChild(buttonRemover);


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.

const allLi = document.querySelectorAll("li");

for (const thisLi of allLi){
    const button = document.createElement("button");
    button.textContent = "Delete this item";
    button.style.margin = "10px";

    button.addEventListener("click", function (){
        thisLi.remove();
    })

    thisLi.appendChild(button);
}