// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

const inputClick = document.querySelector(".click");
inputClick.type = "button";
inputClick.value = "Aim da Baton";
inputClick.id = "btnTOClick";

inputClick.addEventListener("click", function (event){
    console.log(event);
})



// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const inputFocus = document.querySelector(".focus");
inputFocus.addEventListener("focus", (event1) => {
    console.log(event1.target.value);
    event1.target.style.background = "lightgreen";
    // inputFocus.style.background = "red";
    });

inputFocus.addEventListener("blur", (event1) => {
    event1.target.style.background = "";
    });

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const inputValue = document.querySelector (".value");
inputValue.addEventListener("input", () => console.log(inputValue.value));
