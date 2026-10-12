/* Fichero JavaScript de la práctica 9. Contiene la totalidad de las funciones de validación, seguido del proceso completo de login */

//Constante minus con los caracteres en minúsculas válidos para el nombre de usuario y la contraseña
const minus = "aábcçdeéfghiíjklmnñoópqrstuúüvwxyz";

//Constante mayus con los caracteres en mayúsculas válidos para la contraseña
const mayus = "AÁBCÇDEÉFGHIÍJKLMNÑOÓPQRSTUÚÜVWXYZ";

//Constante num con los caracteres numéricos válidos para el nombre de usuario y la contraseña
const num = "0123456789";

//Función para validación de nombre de usuario. Requiere una cadena de texto llamada login como parámetro
//Devuelve true si el nombre de usuario es válido, false en caso contrario y null en caso de que el parámetro no sea una cadena de texto
function loginValidator(login) {
    //Se evalúa si el parámetro login es una cadena de texto
    if (typeof(login) == "string") {
        //Se inicia la secuencia de validación en caso positivo
        //Se declaran tres variables locales booleanas y se les asigna el valor false
        //La variable local tieneMinus determinará si el nombre de usuario contiene, al menos, una letra minúscula
        let tieneMinus = false;

        //La variable local tieneNum determinará si el nombre de usuario contiene, al menos, un número
        let tieneNum = false;

        //La variable local tieneMayus determinará si el nombre de usuario contiene, al menos, una letra mayúscula
        let tieneMayus = false;

        //Se inicia un bucle for para recorrer los caracteres del nombre de usuario, almacenado en el parámetro login
        //Se declara y asigna 0 a la variable local de iteración i, se imponer la condición de parada del bucle en que la variable local i es inferior a la longitud
        //de la cadena de texto del parámetro login y se incrementa en 1 la variable local i al final de cada iteración
        for (let i = 0; i < login.length; i++) {
            //Se evalúa si el carácter de la cadena de texto almacenada en el parámetro login en la posición i es un carácter contenido en la constante minus
            if (minus.includes(login.charAt(i)))
            //En caso positivo, se asigna el valor true a la variable local tieneMinus
                tieneMinus = true;

            //En caso contrario, se evalúa si el carácter de la cadena de texto almacenada en el parámetro login en la posición i es un carácter contenido en la constante num
            else if (num.includes(login.charAt(i)))
            //En caso positivo, se asigna el valor true a la variable local tieneNum
                tieneNum = true;

            //En caso contrario, se evalúa si el carácter de la cadena de texto almacenada en el parámetro login en la posición i es un carácter contenido en la constante mayus
            else if (mayus.includes(login.charAt(i)))
            //En caso positivo, se asigna el valor true a la variable local tieneMayus
                tieneMayus = true;
        }

        //Se requiere que el nombre de usuario contenga, al menos, una letra minúscula y un número y que no contenga caracteres en mayúsculas
        //por tanto, se devuelve la expresión booleana que lo demuestra, es decir, tieneMinus y tieneNum y no tieneMayus
        return tieneMinus && tieneNum && !tieneMayus;
    }
}

//Función para validación de contraseña. Requiere una cadena de texto llamada password como parámetro
//Devuelve true si la contraseña es válida, false en caso contrario y null en caso de que el parámetro no sea una cadena de texto
function passwordValidator(password) {
    //Se evalúa si el parámetro login es una cadena de texto
    if (typeof(password) == "string") {
        //Se inicia la secuencia de validación en caso positivo
        //Se declaran tres variables locales booleanas y se les asigna el valor false
        //La variable local tieneMinus determinará si la contraseña contiene, al menos, una letra minúscula
        let tieneMinus = false;

        //La variable local tieneNum determinará si la contraseña contiene, al menos, un número
        let tieneNum = false;

        //La variable local tieneMayus determinará si la contraseña contiene, al menos, una letra mayúscula
        let tieneMayus = false;

        //La variable local tieneOtroCaracter determinará si la contraseña contiene, al menos, un carácter que no sea ni una letra ni un número
        let tieneOtroCaracter = false;

        //Se inicia un bucle for para recorrer los caracteres de la contraseña, almacenada en el parámetro password
        //Se declara y asigna 0 a la variable local de iteración i, se imponer la condición de parada del bucle en que la variable local i es inferior a la longitud
        //de la cadena de texto del parámetro passqord y se incrementa en 1 la variable local i al final de cada iteración
        for (let i = 0; i < password.length; i++) {
            //Se evalúa si el carácter de la cadena de texto almacenada en el parámetro password en la posición i es un carácter contenido en la constante minus
            if (minus.includes(password.charAt(i)))
            //En caso positivo, se asigna el valor true a la variable local tieneMinus
                tieneMinus = true;

            //En caso contrario, se evalúa si el carácter de la cadena de texto almacenada en el parámetro password en la posición i es un carácter contenido en la constante num
            else if (num.includes(password.charAt(i)))
            //En caso positivo, se asigna el valor true a la variable local tieneNum
                tieneNum = true;

            //En caso contrario, se evalúa si el carácter de la cadena de texto almacenada en el parámetro password en la posición i es un carácter contenido en la constante mayus
            else if (mayus.includes(password.charAt(i)))
            //En caso positivo, se asigna el valor true a la variable local tieneMayus
                tieneMayus = true;
            else
            //En cualquier otro caso, se asigna el valor true a la variable local tieneOtroCaracter
                tieneOtroCaracter = true;
        }

        //Se requiere que el nombre de usuario contenga, al menos, una letra minúscula y un número, una letra mayúscula y cualquier otro carácter
        //por tanto, se devuelve la expresión booleana que lo demuestra, es decir, tieneMinus y tieneNum y tieneMayus y tieneOtroCaracter
        return tieneMinus && tieneMayus && tieneNum && tieneOtroCaracter;
    }
}

//Se comienza el hilo principal de ejecución de este fichero para solicitar un nombre de usuario y una contraseña al usuario y validarlos
//Se declara la variable local login y se le asigna el valor devuelto por la función prompt, que solicita mediante un cuadro de diálogo, el nombre de usuario al usuario
let login = prompt("Introduzca nombre de usuario: ");

//Se inicia un bucle while y se impone como condición que el booleano devuelto por la función loginValidator con la variable local login como argumento sea falso
//El caso en que la función loginValidator devuelve null se trata como false
while (!loginValidator(login)) {
    //En caso de cumplirse la condición, se asigna a la variable local login y se le asigna el valor devuelto por la función prompt, que notifica al usuario mediante un cuadro de diálogo que
    //la cadena de texto que ha introducido no es válida y el por qué, y se le vuelve a solicitar que introduzca un nombre de usuario válido
    login = prompt(
        "El nombre de usuario no debe tener mayúsculas." +
        "\nDebe contener al menos una letra minúscula y al menos una cifra." +
        "\nPor favor, introduzca un nombre de usuario válido: "
    );
}

//El proceso de validación de contraseña es análogo al de login
//Se declara la variable local password y se le asigna el valor devuelto por la función prompt, que solicita mediante un cuadro de diálogo, la contraseña al usuario
let password = prompt("Introduzca contraseña: ");

//Se inicia un bucle while y se impone como condición que el booleano devuelto por la función passwordValidator con la variable local password como argumento sea falso
//El caso en que la función passwordValidator devuelve null se trata como false
while (!passwordValidator(password)) {
    //En caso de cumplirse la condición, se asigna a la variable local password y se le asigna el valor devuelto por la función prompt, que notifica al usuario mediante un cuadro de diálogo que
    //la cadena de texto que ha introducido no es válida y el por qué, y se le vuelve a solicitar que introduzca una contraseña válida
    password = prompt(
        "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial." +
        "\nPor favor, introduzca una contraseña válida: "
    );
}

//Finalizada la validación, se informa al usuario mediante cuadro de diálogo, que dicha validación ha sido superada con éxito
confirm("Nombre de usuario y contraseña válidos.");