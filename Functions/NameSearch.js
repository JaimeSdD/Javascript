// Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe
// dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve la
// posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:
const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

// 1. Con bucle forEach
function finderName(arr, name) {
  arr.forEach(function (element, i) {
    if (element === name) {
      return console.log(element, "is in the position:", i);
    }
  });
  if (!arr.includes(name)) {
    return console.log(false);
  }
}

finderName(nameFinder, "Tony");
finderName(nameFinder, "Pepito");

// 2. Con for.Each y flechita
function finderName(arr, name) {
    arr.forEach((element, i) =>{
      if (element === name) {
        return console.log(element, "is in the position:", i);
      }
});
    if (!arr.includes(name)) {
      return console.log(false);
    }
  }
  
  finderName(nameFinder, "Clint");
  finderName(nameFinder, "Pepito");

//3.  Con .includes()
function finder(arr, name) {
  if (!arr.includes(name)) {
    return console.log(false);
  }
  return console.log(name, "is in the position:", arr.indexOf(name));
}

finder(nameFinder, "Bruce");
finder(nameFinder, "Pepito");


// 4. case insensitive: convierte en minusculas el array y 
// el parámetro (creando un nuevo array y una nueva variable).

// function finder(arr, name) {
//     const lower = arr.map(element => {
//         return element.toLowerCase();
//     })
//     const lname = name.toLowerCase();
//     if (!lower.includes(lname)) {
//       return console.log(false);
//     }
//     return console.log(lname, "is in the position:", lower.indexOf(lname));
//   }
  
//   finder(nameFinder, "BrUce");
//   finder(nameFinder, "Pepito");
