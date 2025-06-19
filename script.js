const colores = [
    "green",
    "blue",
    "red",
];

function cambiarColor() {
    const color = colores[Math.floor(Math.random() * colores.length)];
    document.getElementsByTagName("h5").style.color = color;
};

