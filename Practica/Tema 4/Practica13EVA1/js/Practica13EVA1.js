//Versión recursiva
function fibonacciRecursivo(n) {
    //Se evalúa si el valor del parámetro introducido es un número y si este es mayor o igual que cero
    if (!isNaN(n) && n >= 0) {
        //En caso positivo, se evalúa si el número es cero, en cuyo caso, se devuelve cero
        if (n == 0) return 0;

        //Se evalúa si el número es uno, en cuyo caso, se devuelve uno
        if (n == 1) return 1;

        //Se devuelve la suma de esta misma función evaluada en su antecesor y la misma función evaluada en el antecesor de este último.
        return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
    }

    //Se devuelve false
    return false;
}

//Versión iterativa
function fibonacciIterativo(n) {
    //Se evalúa si el valor del parámetro introducido es un número y si este es mayor o igual que cero
    if (!isNaN(n) && n >= 0) {
        //Se declara una variable y se le asigna el cero, primer valor de la sucesión
        let antecesor = 0;
        //Se declara una variabe y se le asigna el uno, segundo valor de la sucesión
        let actual = 1;
        //Se declara una variable
        let sucesor;

        //Se inicializa un bucle for en el que se declara una variable y se le asigna el cero, ésta es el iterador
        //Se indica que el iterador sea inferior al valor introducido por parámetros como condición de parada
        //Se incrementa el iterador en uno como iteración
        for (let i = 0; i < n; i++) {
            //Se asigna a la variable "sucesor" el valor de la suma de las variables "antecesor" y "actual"
            //Esto representa el cálculo del siguiente término de la sucesión
            sucesor = antecesor + actual;
            //Se asigna el valor de la variable "actual" a la variable "antecesor"
            //Así se simboliza en la variable una especie de movimiento "a la derecha" en la sucesión
            antecesor = actual;
            //Se asigna el valor de la variable "actual" a la variable "actual"
            //Ídem al anterior, simboliza un desplazamiento "a la derecha" en la sucesión para la variable
            actual = sucesor;
        }
        //Se devuelve el valor almacenado en la variable "antecesor" pues contiene el valor actual de la sucesión, en caso de haber
        //entrado en el bucle y cero en caso de no haber entrado, para denotar el cero como término inicial de la sucesión
        //Se puede cambiar el término inicial al asignar uno durante la declaración de la variable, sin pérdida de generalidad
        return antecesor;
    }
    //Se devuelve falso
    return false;
}

//Versión directa
function fibonacciDirecto(n) {
    //Se evalúa si el valor introducido por parámetros es entero y mayor o igual que cero
    if (!isNaN(n) && n >= 0) {
        //A continuación se expresa, a partir de la ecuación característica de la ecuación en diferencias x_{n+2} = x_n + x_{n+1}
        /*r²-r-1 = 0
        r = 0.5 +- sqrt(5)/2
        a_n = A(1-sqrt(5))/2)^n + B(1+sqrt(5))/2)^n
        a_0 = 0 = A + B, 
        a_1 = 1 = A*(1-sqrt(5))/2 + B*(1+sqrt(5))/2
        A = 1/sqrt(5)
        a_n = (sqrt(5)-1)/(2*sqrt(5)) * (((1-sqrt(5))/2)^n - ((1 + sqrt(5))/2)^n)
        */
        //Se declara y asigna la solución analítica al problema de valor inicial para la sucesión de fibonacci
        let resultado = (-1 / Math.sqrt(5)) * ((((1 - Math.sqrt(5)) / 2) ** n) - (((1 + Math.sqrt(5)) / 2) ** n));
        //Se devuelve el parseo a entero del valor asignado a la variable resultado, pues éste es un float que resulta por arrastre de error en los métodos de computación
        return parseInt(resultado);
    }

    //Se devuelve falso
    return false;
}