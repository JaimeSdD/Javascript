// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
// Puedes usar este array para probar tu función:

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

function repeatCounter(arr) {
  let counter = {};
  for (let i = 0; i < arr.length; i++) {
    if (counter[arr[i]]) {
      counter[arr[i]]++;
    } else {
      counter[arr[i]] = 1;
    }
  }
  return console.log(counter);
}

repeatCounter(counterWords);

//   Con for of
function repeat(arr) {
  let counter1 = {};
  for (element of arr) {
    if (counter1[element]) {
      counter1[element] += 1;
    } else {
      counter1[element] = 1;
    }
  }
  return console.log(counter1);
}

repeat(counterWords);

// Con for of ternario
function repeatTernario(arr) {
  let counter2 = {};
  for (element of arr) {
    counter2[element] ? counter2[element]++ : (counter2[element] = 1);
  }
  return console.log(counter2);
}

repeatTernario(counterWords);

// Con reduce ternario
function repeatReduce(arr) {
  return console.log(
    arr.reduce((count, currentValue) => {
        count[currentValue] ? count[currentValue]++ : (count[currentValue] = 1)
        return count;
    }, {})
  );
}

repeatReduce(counterWords);
