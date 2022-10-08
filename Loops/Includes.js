// Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".
// Usa la función .includes de javascript.

const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

for (let i = 0; i < products.length; i++){
    if (products[i].includes("Camiseta")){
        console.log(products[i]);
    }
}

// 2. Con for of
for(element of products){
    if(element.includes("Camiseta")){
        console.log(element);
    }
}

// 3. Invocando for Each 
let Checker = function wordChecker (element){
   if (element.includes("Camiseta")){
    console.log(element);
   }
}

products.forEach(Checker);

// 4. Con for Each directamente
products.forEach(function (element){
    if(element.includes("Camiseta")){
        console.log(element);
    }
}
)

// 5. Con for of ternario 
for(element of products){
    element.includes("Camiseta")?
    console.log(element): false;
}