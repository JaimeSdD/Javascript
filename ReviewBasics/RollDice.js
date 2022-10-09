// Crea una función llamada rollDice() que reciba como parametro el numero de caras que
// queramos que tenga el dado que deberá simular el codigo dentro de la función.
// Como hemos dicho, que la función use el parametro para simular una tirada de dado
// y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes!
// busca información sobre la función de javascript Math.random();

function rollDice (DiceFaces){
    return Math.floor(Math.random() * DiceFaces) + 1;
    // Math.ceil no funciona porque la función Math.random puede generar 0
}

// console.log(rollDice(6));
for (let i = 0; i < 5; i++){console.log(rollDice(6))};
// console.log(rollDice(3));
// console.log(rollDice(10));


