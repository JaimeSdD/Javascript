// 4.1 Dado el siguiente array, devuelve un array con sus nombres 
// utilizando .map().

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const usersNames = users.map(user => user.name);
console.log(usersNames);

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
// empiece por 'A'.

const usersList = users.map(user => {
    if(user.name.startsWith("A")){
        user.name = "Anacleto"
    }
    return user.name;
});

console.log(usersList);
console.log(users);

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
// cuando el valor de la propiedad isVisited = true.

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

// Sin modificar el array de objetos
const citiesCopy1 = cities.map(city => 
    city.isVisited ? {...city, name : city.name + " (visited)"} : {...city}
);

console.log(citiesCopy1);
console.log(cities);
 

// Modifica el array inicial
const citiesCopy = cities.map(city =>{
     return city.isVisited ? city.name += " (Visited)" : city.name;
})

console.log(citiesCopy);
console.log(cities);