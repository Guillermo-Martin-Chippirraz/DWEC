//Versión recursiva
function fibonacciRecursivo(n) {
    if (!isNaN(n) && n >= 0) {
        if (n == 0) return 0;
        if (n == 1) return 1;

        return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
    }

    return false;
}

//Versión iterativa
function fibonacciIterativo(n) {
    if (!isNaN(n) && n >= 0) {
        let a = 0;
        let b = 1;
        let c;
        for (let i = 0; i < n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return a;
    }
    return false;
}

//Versión directa
function fibonacciDirecto(n) {
    if (!isNaN(n) && n >= 0) {
        /*r²-r-1 = 0
        r = 0.5 +- sqrt(5)/2
        a_n = A(1-sqrt(5))/2)^n + B(1+sqrt(5))/2)^n
        a_0 = 0 = A + B, 
        a_1 = 1 = A*(1-sqrt(5))/2 + B*(1+sqrt(5))/2
        A = 1/sqrt(5)
        a_n = (sqrt(5)-1)/(2*sqrt(5)) * (((1-sqrt(5))/2)^n - ((1 + sqrt(5))/2)^n)
        */
        let resultado = (-1 / Math.sqrt(5)) * ((((1 - Math.sqrt(5)) / 2) ** n) - (((1 + Math.sqrt(5)) / 2) ** n));
        return parseInt(resultado);
    }

    return false;
}