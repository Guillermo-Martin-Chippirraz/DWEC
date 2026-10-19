function soloAlfanumericosYGuionBajoValidator(texto) {
    regex = /^[\w]+$/;

    while (!regex.test(texto) && texto != null) {
        texto = prompt("Incorrecto: Sólo se admiten caracteres alfanuméricos y guion bajo." +
            "\nPor favor, introduzca un texto válido: "
        );
    }

    if (texto == null)
        return false;
}

function unoOMasCaracteresAlfanumericosValidator(texto) {
    regex = /[\w]+/;

    while (!regex.test(texto) && texto != null) {
        texto = prompt("Incorrecto: Debe haber, al menos, un caracter alfanumérico." +
            "\nPor favor, introduzca un texto válido: "
        );
    }

    if (texto == null)
        return false;
}

function nombreYApellidosValidator(nombreYApellidos) {
    regex = /^[A-Z][a-z]+\s[A-Z][a-z](\s[A-Z][a-z])?$/;

    while (!regex.test(nombreYApellidos) && nombreYApellidos != null) {
        nombreYApellidos = prompt("Incorrecto: Un nombre completo en español, consiste de un primer nombre y uno o dos apellidos, cada uno empieza por mayúscula y hay espacio entre ellos" +
            "\nPor favor, introduzca un texto válido: "
        );
    }

    if (nombreYApellidos == null)
        return false;
}

function fechaFormatoValidator(fecha) {
    regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    while (!regex.test(fecha) && fecha != null) {
        fecha = prompt("Incorrecto: El formato de fecha español es dd/mm/aaaa, con los días entre 01 y 31 y los meses desde 01 hasta 12." +
            "\nPor favor, introduzca un texto válido: "
        );
    }

    if (fecha == null)
        return false;
}

function emailFormatoValidator(email) {
    regex = /^[\w.%+-]+@[\w-]+[.:][a-zA-Z]{2,}$/;

    while (!regex.test(email) && email != null) {
        email = prompt("Incorrecto: El formato de email consiste en: \n-El texto antes de la arroba podrá tener letras, números y/o los símbolos ._%+-" +
            "\nEl texto después de la arroba puede estar compuesto por letras, números guiones, uno o dos puntos y un dominio principal de 2 o más caracteres." +
            "\nPor favor, introduzca un texto válido: "
        );
    }

    if (email == null)
        return false;
}