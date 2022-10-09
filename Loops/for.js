// Usa un bucle for para recorrer todos los destinos del array
//  y elimina los elementos que tengan el id 11 y 40. 
//  Imprime en un console log el array. Puedes usar este array:

const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

for (i = 0; i < placesToTravel.length; i++){
    destination = placesToTravel[i];

    destination.id === 11 || destination.id === 40 ? placesToTravel.splice(i, 1) && i-- : destination;
}

console.log(placesToTravel);