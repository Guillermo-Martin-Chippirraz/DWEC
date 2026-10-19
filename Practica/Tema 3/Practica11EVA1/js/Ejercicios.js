/**
 * Valida que el nombre de usuario introducido cumpla con el formato alfanumérico.
 * Si la entrada no es válida, abre un bucle de reintento mediante un prompt y registra los fallos.
 * 
 * @param {string} nombreDeUsuario - El login introducido por el usuario.
 * @returns {string} HTML con el resultado de la validación.
 */
function loginValidator(nombreDeUsuario) {
    //Expresión regular: sólo permite letras (mayúsculas/minúsculas) y números (1 o más caracteres).
    let regex = /^[a-zA-Z0-9]+$/;
    let admitida = "";

    //Bucle de validación: se repite mientras la entrada no cumpla estrictamente con la expresión regular.
    while (!regex.test(nombreDeUsuario) && nombreDeUsuario != null) {
        nombreDeUsuario = prompt("Incorrecto: El login sólo puede contener números y letras" +
            "\nPor favor, introduzca su login: ");
        admitida += "<p>No admitida</p>";
    }

    if (nombreDeUsuario != null)
        admitida += "<p>Admitida</p>";
    else
        admitida += "<p>Gracias por usar esta aplicación</p>";

    return admitida;
}

/**
 * Valida el formato de un DNI o NIE español.
 * Formato esperado: Letra/dígito inicial + 7 dígitos + letra de control final permitida.
 * 
 * @param {string} dni - DNI inicial a validar.
 * @returns {string} HTML con el registro de validación.
 */
function dniValidator(dni) {
    //Expresión regular estricta para la estructura del DNI/NIE oficial.
    let regex = /^[KLXYZ0-9][0-9]{7}[A-HJ-N-TV-Z]$/;
    let admitida = "";

    while (!regex.test(dni) && dni != null) {
        dni = prompt("Inválido: Los DNIs válidos deben comenzar por un carácter K, L, X, Y o Z o un dígito, seguido de 7 dígitos y un carácter diferente de I, O y U. " +
            "\nLos caracteres deben escribirse en mayúsculas.\nPor favor, introduzca su DNI: "
        );
        admitida += "<p>No admitida</p>";
    }

    if (dni != null)
        admitida += "<p>Admitida</p>";
    else
        admitida += "<p>Gracias por usar esta aplicación</p>";

    return admitida;
}

/**
 * Valida un código postal español de 5 cifras (comprendido entre 01000 y 52999).
 * 
 * @param {string} codigoPostal - Código postal a comprobar.
 * @returns {string} HTML con el registro de validación.
 */
function codigoPostalValidator(codigoPostal) {
    //Expresión regular que valida rangos provinciales desde 01 hasta 52 seguidos de 3 dígitos.
    let regex = /^((0[1-9])|([1-4][0-9])|(5[0-2]))[0-9]{3}$/;
    let admitida = "";

    while (!regex.test(codigoPostal) && codigoPostal != null) {
        codigoPostal = prompt("Incorrecto: El código postal español es consiste en una cadena de 5 cifras en el intervalo entre 01000 y 52999." +
            "\nPor favor, introduzca su código postal: "
        );
        admitida += "<p>No admitida</p>";
    }

    if (codigoPostal != null)
        admitida += "<p>Admitida</p>";
    else
        admitida += "<p>Gracias por usar esta aplicación</p>";

    return admitida;
}

/**
 * Valida una dirección IPv4 estándar compuesta por 4 octetos numéricos (0 a 255).
 * 
 * @param {string} direccionIPv4 - Dirección IP inicial introducida.
 * @returns {string} HTML con el registro de la validación.
 */
function direccionIPv4Validator(direccionIPv4) {
    //Expresión regular que valida los 4 bloques numéricos de la IP separados por puntos.
    let regex = /^((([0-1]\d\d)|(2[0-4]\d)|(25[0-5])).){3}([0-1]\d\d)|(2[0-4]\d)|(25[0-5])$/;
    let admitida = "";

    while (!regex.test(direccionIPv4) && direccionIPv4 != null) {
        direccionIPv4 = prompt("Incorrecto: Una dirección IPv4 tiene la forma 000-255.000-255.000-255.000-255." +
            "\nPor favor, introduzca su dirección IPv4: "
        );
        admitida += "<p>No admitida</p>";
    }

    if (direccionIPv4 != null)
        admitida += "<p>Admitida</p>";
    else
        admitida += "<p>Gracias por usar esta aplicación</p>";

    return admitida;
}