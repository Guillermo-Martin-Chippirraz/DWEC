function cogeArray(cadena) {
    let regex = /^[a-zA-ZÁÉÍÓÚáéíóúü\s]*$/;

    return (regex.test(cadena)) ? cadena.split(" ") : false;
}

function muestraArray(cadena) {
    let array = cogeArray(cadena);

    if (array) {
        document.write("Número de palabras: " + array.length + "<br>");
        document.write("Primera palabra: " + array[0] + "<br>");
        document.write("Última palabra: " + array[array.length - 1] + "<br>");
        let arrayInvertido = cogeArray(cadena).reverse();
        document.write("Palabras en orden inverso: " + arrayInvertido + "<br>");
        let arrayMinusculas = cogeArray(cadena.toLowerCase());
        document.write("Palabras en minúscula ordenadas de la a a la z: " + arrayMinusculas.sort() + "<br>");
        document.write("Palabras en minúscula ordenadas de la z a la a: " + arrayMinusculas.sort().reverse() + "<br>");

    }
}