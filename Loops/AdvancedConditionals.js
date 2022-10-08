// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados
// y añade la propiedad ***isApproved*** a true o false en consecuencia.
// Una vez lo tengas compruébalo con un ***console.log***.

// Puedes usar este array para probar tu función:

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (alumn of alumns){
    let approved = 0;
    alumn.T1 ? approved++ : "innecesario";
    alumn.T2 ? approved++ : approved;
    alumn.T3 ? approved++ : approved;
    alumn.isApproved = approved >= 2? true : false;
    // if (approved >=2) {alumn.isApproved = true} else {alumn.isApproved = false};
  }

  console.log(alumns);

// 2. Con for in (igual que un bucle normal)
// for(key in alumns){
//     let alumn = alumns[key];

//     let approvedCount = 0;
//     approvedCount = alumn.T1 ? approvedCount + 1 : approvedCount;
//     approvedCount = alumn.T2 ? approvedCount + 1 : approvedCount;
//     approvedCount = alumn.T3 ? approvedCount + 1 : approvedCount;
//     alumn.isApproved = approvedCount >= 2 ? true : false;

// }

// console.log(alumns);

  