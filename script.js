const colores = [
    "green",
    "blue",
    "red",
];

function cambiaColor() {
    
    const color = colores[Math.floor(Math.random() * colores.length)];

    var array = document.getElementsByTagName("h5");

    for (let index = 0; index < array.length; index++) {
        array[index].style.color = color;
        console.log("wasd");
    }

    alert("Se cambio el color");

};



