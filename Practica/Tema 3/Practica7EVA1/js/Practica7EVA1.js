let DNI = prompt("Por favor, introduzca su DNI (con letra)");
let letraDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
let DNIvalido = /^[0-9]{8}[a-z]$/i;

let DNIvalidez = false;
do {

    if (DNIvalido.test(DNI)) {
        let letraIntroducida = DNI[DNI.length - 1];
        let caracterCorrecto = parseInt(DNI.substring(0, DNI.length - 1)) % 23;
        console.log(caracterCorrecto);
        console.log(letraIntroducida);
        console.log(letraDNI[caracterCorrecto]);
        console.log(letraIntroducida.toLocaleUpperCase() == letraDNI[caracterCorrecto].toLocaleUpperCase());

        if (letraIntroducida.toLocaleUpperCase() == letraDNI[caracterCorrecto].toLocaleUpperCase()) {
            console.log("Se ha entrado al if final");
            DNIvalidez = true;
        }

        console.log(DNIvalidez);
    }

    if (!DNIvalidez && DNI != 0 && DNI != "") {
        DNI = prompt("DNI incorrecto. Por favor, introduzca un DNI válido. \nEn caso de no recordarlo, introduzca \'0\' o haga click en \"Aceptar\"");
    }


} while (!DNIvalidez && DNI != 0 && DNI != "");

let respuesta = "";

if (DNIvalidez)
    respuesta = "El DNI es válido.";
else
    respuesta = "Ha cancelado la operación, tenga un buen día";

confirm(respuesta);
document.write(respuesta);