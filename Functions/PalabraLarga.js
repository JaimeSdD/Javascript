// Completa la función que tomando un array de strings como argumento devuelva el más largo,
//  en caso de que dos strings tenga la misma longitud deberá devolver el primero.
// Puedes usar este array para probar tu función:
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(arr) {
let word = '';
for(i = 0; i < arr.length; i++){
    if (word.length < arr[i].length){
        word = arr[i]
    } 
}
return ['The longest word is', word, 'with', word.length, 'letters.'].join(' ');
}

console.log(findLongestWord(avengers));