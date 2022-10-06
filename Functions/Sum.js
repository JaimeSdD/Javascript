// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
// Implemente la función denominada sumNumbers que toma un array de números como argumento
//  y devuelve la suma de todos los números de la matriz.

// Puedes usar este array para probar tu función:
const numbers = [1, 2, 3, 5, 45, 37, 58];
const numbers1 = [3, 7, 24, 200, 36, 47];

function sumAll(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
    }
    return console.log(sum);
}

sumAll(numbers);
sumAll(numbers1);

// Con for of
function sumOf (arra){
  let sum2 = 0;
  for (const element of arra){
    sum2 += element;
  }
  return console.log(sum2);
}

sumOf(numbers);
sumOf(numbers1);

// Con reduce
function sumReduce (ar){
  return console.log (ar.reduce((sumaTotal, element) => sumaTotal + element));
}

sumReduce(numbers);
sumReduce(numbers1);

// Con flecha
let sumArrow = a => console.log(a.reduce((sumaTotal, element) => sumaTotal + element));

sumArrow(numbers);
sumArrow(numbers1);