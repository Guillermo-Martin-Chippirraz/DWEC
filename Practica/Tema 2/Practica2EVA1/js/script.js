/*
Script auxiliar que contiene el método necesario para completar la práctica 2 del tema 2.

@author Guillermo Martín Chippirraz
@version v1.0
*/

/*La función «tabla» genera en el documento una tabla con un número de columnas que coincide con el
entero introducido en el parámetro «nFilas» y un número de columnas que coincide con el entero introducido en el parámetro
«nColumnas»

@since v1.0
@param nFilas entero que indica el número de filas de la tabla
@param nColumnas entero que indica el número de columnas de la tabla
*/
function tabla(nFilas, nColumnas) {

    document.write("<table>");

    for (let i = 0; i < nFilas; i++) {
        document.write("<tr>");
        for (let j = 0; j < nColumnas; j++) {
            document.write("<td></td>");
        }

        document.write("</tr>");
    }
    document.write("</table>");
}