/**
 * Altera el color de fondo del elemento del documento con id "fondo" de forma aleatoria.
 */
function funcionCB() {
    //Se declaran tres variables y a cada una se le asigna el parseo a entero del producto del valor devuelto por el método random() del objeto Math y 255.
    let rojo = parseInt(Math.random() * 255);
    let verde = parseInt(Math.random() * 255);
    let azul = parseInt(Math.random() * 255);

    //Se asigna a la propiedad CSS "backgroundColor" del atributo "style" del elemento del documento con id "fondo" la función CSS rgb con los valores
    //de las variables "rojo", "verde" y "azul" como parámetros, en ese orden
    document.getElementById("fondo").style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
}