/*
MI SOLUCIÓN
function esPalindromo(cadena) {
    let regex = /^\D*$/;

    while (!regex.test(cadena)) {
        cadena = prompt("No puede contener números.\nEscriba otra frase: ");
    }

    array = cadena.split("");
    arrayInvertido = cadena.split("").reverse();


    return array == arrayInvertido;
}*/

/*
SOLUCIÓN
*/

function esPalindromo(cadena) {
    let regex = /^\D*$/;

    while (!regex.test(cadena)) {
        cadena = prompt("No puede contener números.\nEscriba otra frase: ");
    }

    arrayCadena = cadena.split("");
    let nuevaCadena = "";
    for (let i = 0; i < cadena.length; i++) {
        caracter = arrayCadena[i];
        switch (caracter) {
            case "Á", "á":
                arrayCadena[i] = "a";
                break;
            case "É", "é":
                arrayCadena[i] = "e";
                break;
            case "Í", "í":
                arrayCadena[i] = "i";
                break;
            case "Ó", "ó":
                arrayCadena[i] = "o";
            case "Ú", "ú", "Ü", "ü":
                arrayCadena[i] = "u";
        }

        if (caracter.match(/^[\W\s]$/))
            arrayCadena[i] = arrayCadena.splice(i, "");
        if (caracter.match(/^[A-ZÑ]$/))
            arrayCadena[i] = caracter.toLowerCase();

    }
    nuevaCadena = arrayCadena.join("");

    nuevaCadenaInvertida = arrayCadena.reverse().join("");

    return nuevaCadena == nuevaCadenaInvertida;
}