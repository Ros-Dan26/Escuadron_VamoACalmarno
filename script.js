const colores = [
    "green",
    "blue",
    "red",
];

function cambiaColor() {
    alert("fdsdsffds6+5");
    const color = colores[Math.floor(Math.random() * colores.length)];
    var tags = document.getElementsByTagName("h5");

    tags.forEach(element => {
        element.styile = color;
    });

    alert("fdsdsffds6+5");
};



