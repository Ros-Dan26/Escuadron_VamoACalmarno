const colores = [
    "green",
    "blue",
    "red",
];

function cambiaColor() {
    alert("Se cambio el color");
    const color = colores[Math.floor(Math.random() * colores.length)];
    var tags = document.getElementsByTagName("h5");

    tags.forEach(element => {
        element.styile = color;
    });


};



