// Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. 
// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado
// como parametro. Retorna el array resultante.

// Sugerencia de array:

const soccerMeme = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

function swap(array, index1, index2){
   const keeper = array[index1];
   array[index1] = array[index2];
   array[index2] = keeper;

   return console.log(array);
}

swap(soccerMeme, 0, 2);
swap(soccerMeme, 1, 3);



