//Factorial no recursivo
function factorialNoRecursivo(n) {
    if (!isNaN(n) && n >= 0) {
        if (n == 0)
            return 1;
        else {
            let resultado = 1;
            for (let i = 0; i < n; i++) {
                resultado *= n - i;
            }
            return resultado;
        }
    }

    return false;
}