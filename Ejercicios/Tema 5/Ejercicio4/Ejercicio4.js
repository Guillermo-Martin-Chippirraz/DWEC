function ParImpar(numero) {
    _numero = numero;

    this.setNumero = (numero) => {
        _numero = numero;
    };
    this.getNumero = () => _numero;
    this.error = () => {
        if (isNaN(_numero) || !Number.isInteger(_numero)) {
            if (typeof _numero === "undefined") {
                console.error("Dato erróneo");
            } else {
                console.log("Dato erróneo");
            }
        } else {
            console.log("Dato correcto");
        }
    };
    this.resuelve = (numero) => {
        if (isNaN(numero) || !Number.isInteger(numero)) {
            this.error();
        } else {
            confirm(numero % 2 == 0 ? "par" : "impar");
        }
    }
    this.es = () => _numero % 2 == 0 ? "par" : "impar";
    this.muestraRandom = () => {
        for (let i = 0; i < 10; i++) {
            let num = parseInt(Math.random() * 10000 + 1);
            num = new ParImpar(num);
            document.write(`${num.getNumero()} -> ${num.es()} <br>`);
        }
    }
}