function funcionCB() {
    let rojo = parseInt(Math.random() * 255);
    let verde = parseInt(Math.random() * 255);
    let azul = parseInt(Math.random() * 255);

    document.getElementById("fondo").style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`
}