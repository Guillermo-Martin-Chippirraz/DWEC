function validaParidad(numero) {
    if (Number.isInteger(numero)) {
        return (numero % 2 == 0) ? "par" : "impar";
    }
}

function validaParidadDeNumerosAleatorios() {
    let resultado = "";

    for (let i = 0; i < 50; i++) {
        let numeroAleatorio = parseInt(Math.random() * 1000 + 1);
        console.log(numeroAleatorio);
        resultado = numeroAleatorio + " es un número " + validaParidad(numeroAleatorio) + ".\n";
    }

    return resultado;
}