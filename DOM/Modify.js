// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

let div = document.createElement("div");
document.body.appendChild(div);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

let div1 = document.createElement("div");
let p1 = document.createElement("p");
div1.appendChild(p1);
document.body.appendChild(div1);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let div2 = document.createElement("div");
for (let i = 0; i < 6; i++){
    let p2 = document.createElement("p");
    div2.appendChild(p2);
}
document.body.appendChild(div2);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

let p3 = document.createElement("p");
p3.textContent = "Soy dinámico!"
document.body.appendChild(p3);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

let h2 = document.querySelector("h2");
// let h2 = document.querySelector(".fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";
// document.body no es necesario porque ya está en el html

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let ul = document.createElement("ul");

for (const app of apps){
    let li = document.createElement("li");
    li.textContent = app;
    ul.appendChild(li);
}

document.body.appendChild(ul);


// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

let elements = document.querySelectorAll(".fn-remove-me");
for (element of elements){
    element.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

// let p4 = document.createElement("p");
// p4.textContent = "Voy en medio!";
// let target = document.querySelector(".target"); metiéndole clase al div que es nuestro target

// document.body.insertBefore(p4, target);

let p4 = document.createElement("p");
p4.textContent = "Voy en medio!";
let divs = document.querySelectorAll("div");

document.body.insertBefore(p4, divs[1]);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

let divClass = document.querySelectorAll("div.fn-insert-here");

for(element of divClass){
    let p5 = document.createElement("p");
    p5.textContent = "Voy dentro!";

    element.appendChild(p5);
}
