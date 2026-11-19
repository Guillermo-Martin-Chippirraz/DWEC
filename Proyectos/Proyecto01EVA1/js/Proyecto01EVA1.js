function validarFormulario(tamaño, minas) {
    if (isNaN(tamaño))
        return "El tamaño debe ser un número.";
    if (!Number.isInteger(tamaño))
        return "El tamaño debe ser un número entero.";
    if (tamaño < 2)
        return "El tamaño debe ser mayor o igual que 2";
    if (tamaño > 20)
        return "El tamaño debe ser menor o igual que 20";

    let minasMinimas = parseInt(tamaño * tamaño / 3);
    let minasMaximas = parseInt(tamaño * tamaño * 2 / 3);

    if (isNaN(minas))
        return "El número de minas debe ser un número.";
    if (!Number.isInteger(minas))
        return "El número de minas debe ser un número entero.";
    if (minas < minasMinimas)
        return `El número de minas debe ser mayor o igual a ${minasMinimas}.`;
    if (minas > minasMaximas)
        return `El número de minas debe ser menor o igual a ${minasMaximas}.`;

    return "";
}