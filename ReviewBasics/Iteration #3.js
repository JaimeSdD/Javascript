// Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado 
// por los usuarios a favorito. Para ello recorre la lista de usuarios y usa forin para recoger el nombre 
// de los sonidos que el usuario tenga como favoritos.
// Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita 
// como favorito en cada usuario.

// (lo que pide el ejercicio es que contemos cuantas veces se repite un sonido favorito, 
// por ejemplo, waves lo han agregado 3 usuarios, por lo tanto queremos que el código nos diga que 
// waves se repite 3 veces) 

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let counter = {};

for (const user of users){
    for(const key in user.favoritesSounds){
        if (counter[key]){
            counter[key] += 1;
        } else {
            counter[key] = 1;
        }
    }
}

console.log(counter);