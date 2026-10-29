/*
PRUEBA ERRADA
//Declaro la función stringToCani con el parámetro cadena original
function stringToCani(cadenaOriginal) {
    //Creo una variable regex que indicara los valores permitidos
    let regex = /^[A-Za-z\s]*$/ //Esta cadena admite una cantidad de 1 o más caracteres mayúsculas, minúsculas o espacios.

    //Se inicializa un bucle while que evalúa si el argumento cumple la expresión regular
    while (!regex.test(cadenaOriginal)) {
        //En caso de no cumplirlo, se solicita al usuario que introduzca una cadena válida las veces que haga falta.
        cadenaOriginal = prompt("La cadena sólo puede llevar mayúsculas, minúsculas o espacios.\nPor favor, introduzca una cadena válida: ");
    }

    //Declaro una variable y le asigno el array devuelto al hacer split con la subcadena " " como argumento. Así se guarda cada palabra por separado sin espacios.
    let arrayPalabras = cadenaOriginal.split(" ");

    //Se inicializa un bucle de tipo for..in para trabajar palabra por palabra
    for (i in arrayPalabras) {
        //Se declara una variable y se le asigna la palabra en i
        let palabra = arrayPalabras[i];
        //Se inicializa un bucle de tipo for para evaluar cada carácter de la palabra una a una
        for (let j = 0; j < palabra.length; j++) {
            //Se evalúa si el carácter en j es mayúscula
            if (palabra[j].match(/^[A-Z]$/))
            //En caso positivo, se evalúa si j es igual a 0 o si el carácter en j-1 es mayúscula
                if (j == 0 || palabra[j - 1].match(/^[A-Z]$/))
                //En caso positivo, se pasa el carácter a minúscula y se almacena
                    palabra[j] = palabra[j].toLowerCase();
                else
                //En caso negativo, se evalúa si j es igual a 0 o si el carácter en j-1 es mayúscula
            if (j == 0 || palabra[j - 1].match(/^[a-z]$/))
            //En caso positivo, se pasa el carácter a minúscula y se almacena
                palabra[j] = palabra[j].toUpperCase();

            //Se evalúa si el carácter en j es c
            if (palabra[j].localeCompare("c"))
            //En caso positivo, se cambia por k y se almacena
                palabra[j] = "k";
            //En caso negativo, se evalúa si el carácter en j es C
            else if (palabra[j].localeCompare("C"))
            //En caso positivo, se cambia por K y se almacena
                palabra[j] = "K";
        }

        //Se actualiza la palabra en el array
        arrayPalabras[i] = palabra;
    }

    //Se declara una variable y se le asigna la última palabra del array
    let ultimaPalabra = arrayPalabras[arrayPalabras.length - 1];

    //Se evalúa si la última letra es vocal
    if (ultimaPalabra[ultimaPalabra.length - 1].match(/^[AEIOUaeiou]$/))
    //En caso positivo, se agrega HHH al final
        ultimaPalabra += "HHH";

    //Se actualiza la última palabra del array
    arrayPalabras[arrayPalabras.length - 1] = ultimaPalabra;

    //Se devuelve un string con las palabras del array unidas con un " " entre cada palabra.
    return arrayPalabras.join(" ");
}*/

/*SOLUCIÓN */
function stringToCani(cadenaOriginal) {
    //Creo una variable regex que indicara los valores permitidos
    let regex = /^[A-Za-z\s]*$/ //Esta cadena admite una cantidad de 1 o más caracteres mayúsculas, minúsculas o espacios.

    //Se inicializa un bucle while que evalúa si el argumento cumple la expresión regular
    while (!regex.test(cadenaOriginal)) {
        //En caso de no cumplirlo, se solicita al usuario que introduzca una cadena válida las veces que haga falta.
        cadenaOriginal = prompt("La cadena sólo puede llevar mayúsculas, minúsculas o espacios.\nPor favor, introduzca una cadena válida: ");
    }

    //Declaro una variable y le asigno el array devuelto al hacer split con la subcadena " " como argumento. Así se guarda cada palabra por separado sin espacios.
    let arrayPalabras = cadenaOriginal.split(" ");

    //Se inicializa un bucle de tipo for..in para trabajar palabra por palabra
    for (i in arrayPalabras) {
        //Se declara una variable y se le asigna la palabra en i
        palabra = arrayPalabras[i];

        //Se convierte la palabra en un array de caracteres para modificarla

        let letras = palabra.split("");

        //Se inicializa un bucle de tipo for para evaluar cada carácter de la palabra una a una
        for (let j = 0; j < letras.length; j++) {
            let letra = letras[j]
                //Se evalúa si el carácter en j es mayúscula
            console.log("Se ha entrado en el bucle por palabra");
            if (letra.match(/^[A-Z]$/)) {
                console.log("La letra " + letra + " es mayúscula");
                //En caso positivo, se evalúa si j es igual a 0 o si el carácter en j-1 es mayúscula
                if (j == 0 || letras[j - 1].match(/^[A-Z]$/)) {
                    console.log("Estamos en el primer carácter o la letra anterior es mayúscula.");
                    //En caso positivo, se pasa el carácter a minúscula y se almacena
                    letras[j] = letra.toLowerCase();
                    console.log(letras[j]);
                }
            } else {
                console.log("La letra " + letra + " es minúscula");
                //En caso negativo, se evalúa si j es igual a 0 o si el carácter en j-1 es mayúscula
                if (j == 0 || letras[j - 1].match(/^[a-z]$/)) {
                    console.log("Estamos en la letra inicial o la letra anterior es minúscula.");
                    //En caso positivo, se pasa el carácter a minúscula y se almacena
                    letras[j] = letra.toUpperCase();
                    console.log(letras[j]);
                }
            }
            //Se evalúa si el carácter en j es c
            if (letras[j] === "c") {
                console.log("La letra " + j + " es " + letras[j] + ".");
                //En caso positivo, se cambia por k y se almacena
                letras[j] = "k";
                console.log(letras[j]);
                //En caso negativo, se evalúa si el carácter en j es C
            } else if (letras[j] === "C") {
                console.log("La letra " + j + " es " + letras[j] + ".");
                //En caso positivo, se cambia por K y se almacena
                letras[j] = "K";
                console.log(letras[j]);

            }
        }

        //Se actualiza la palabra en el array
        arrayPalabras[i] = letras.join("");
    }

    //Se declara una variable y se le asigna la última palabra del array
    let ultimaPalabra = arrayPalabras[arrayPalabras.length - 1];

    //Se evalúa si la última letra es vocal
    if (ultimaPalabra[ultimaPalabra.length - 1].match(/^[AEIOUaeiou]$/))
    //En caso positivo, se agrega HHH al final
        ultimaPalabra += "HHH";

    //Se actualiza la última palabra del array
    arrayPalabras[arrayPalabras.length - 1] = ultimaPalabra;

    //Se devuelve un string con las palabras del array unidas con un " " entre cada palabra.
    return arrayPalabras.join(" ");
}