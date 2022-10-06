// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
// en caso que existan los elimina para retornar un array sin los elementos duplicados.
// Puedes usar este array para probar tu función:

const duplicates = [
    'sushi',
    'pizza',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  function removeDuplicates(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = i +1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                arr.splice(j, 1);
                j--; 
            }
        }
    }
    return console.log(arr);
  }

  removeDuplicates(duplicates);
