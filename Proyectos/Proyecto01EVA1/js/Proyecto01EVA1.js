/**
 * @file Lógica principal del juego Buscaminas.
 * Gestiona la validación de parámetros iniciales, la generación dinámica del tablero,
 * la distribución aleatoria de minas, el descubrimiento recursivo de casillas libres,
 * el marcado mediante banderines, el cronómetro y la comprobación de victoria o derrota.
 *
 * @author Guillermo Martín Chippirraz
 * @version 1.0.0
 */

/** @type {number[][]} Matriz bidimensional que representa el estado lógico del tablero (-1: mina, 0: libre, 1-8: minas adyacentes). */
let tablero = [];

/** @type {number} Dimensión N de la cuadrícula de juego (N x N). */
let tamañoActual = 0;

/** @type {number} Cantidad total de minas configuradas para la partida actual. */
let minasTotales = 0;

/** @type {number} Contador de minas sin marcar según los banderines colocados por el jugador. */
let minasRestantes = 0;

/** @type {boolean} Indica si el jugador aún no ha realizado su primer movimiento en la partida. */
let primerClick = true;

/** @type {boolean} Indica si la partida ha finalizado por victoria o por detonación de una mina. */
let juegoTerminado = false;

/** @type {number} Tiempo transcurrido en segundos desde el primer clic de la partida. */
let segundos = 0;

/** @type {number|null} Identificador del temporizador activo del cronómetro o null si está detenido. */
let intervalCrono = null;

/**
 * Valida las dimensiones del tablero y la cantidad de minas introducidas en el formulario.
 * Si ambos valores cumplen las restricciones establecidas, actualiza las variables globales
 * de configuración de la partida.
 *
 * @param {number} tamaño Dimensión N del tablero (entero entre 2 y 20).
 * @param {number} minas Número de minas solicitado (entero entre N²/3 y 2N²/3).
 * @returns {string} Mensaje descriptivo del error de validación, o cadena vacía si los datos son válidos.
 */
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

    tamañoActual = tamaño;
    minasTotales = minas;
    return "";
}

/**
 * Prepara e inicia una nueva partida restableciendo el cronómetro, los contadores,
 * las banderas de estado y regenerando la cuadrícula visual en el DOM.
 *
 * @param {string} cronometro Identificador (ID) del elemento HTML que muestra el tiempo.
 * @param {string} contadorMinas Identificador (ID) del elemento HTML que muestra las minas restantes.
 * @param {string} buscaminas Identificador (ID) del contenedor HTML del tablero.
 * @returns {void}
 */
function inicioPartida(cronometro, contadorMinas, buscaminas) {
    detenerCronometro();
    segundos = 0;
    document.getElementById(cronometro).innerText = "000";

    primerClick = true;
    juegoTerminado = false;
    minasRestantes = minasTotales;
    document.getElementById(contadorMinas).innerText = minasRestantes;

    generarTablero(tamañoActual, buscaminas, cronometro, contadorMinas);
}

/**
 * Solicita confirmación al usuario para abandonar la partida en curso y regresar
 * al formulario de configuración inicial, deteniendo el cronómetro si acepta.
 *
 * @returns {void}
 */
function volver() {
    let confirmacion = confirm("Atención: ¿Si continúa, el juego se reiniciará, seguro que desea volver?");
    if (confirmacion) {
        detenerCronometro();
        document.getElementById("juego").className = "juego esconder";
        document.getElementById("form").className = "form ver";
    }
}

/**
 * Inicia el incremento periódico del cronómetro cada segundo, formateando
 * la salida visual a tres dígitos con ceros a la izquierda.
 *
 * @param {string} cronometro Identificador (ID) del elemento HTML donde se renderiza el tiempo.
 * @returns {void}
 */
function iniciarCronometro(cronometro) {
    intervalCrono = setInterval(() => {
        segundos++;
        // Formateado a 3 dígitos
        document.getElementById(cronometro).innerText = String(segundos).padStart(3, "0");
    }, 1000);
}

/**
 * Detiene el temporizador del cronómetro activo y libera su referencia.
 *
 * @returns {void}
 */
function detenerCronometro() {
    if (intervalCrono !== null) {
        clearInterval(intervalCrono);
        intervalCrono = null;
    }
}

/**
 * Construye dinámicamente las N x N celdas HTML dentro del contenedor del tablero,
 * actualiza la variable CSS `--n` para escalar su tamaño y vincula los eventos
 * de clic izquierdo y derecho a cada casilla.
 *
 * @param {number} tamaño Número de filas y columnas del tablero.
 * @param {string} idBuscaminas Identificador (ID) del contenedor del tablero en el DOM.
 * @param {string} cronometro Identificador (ID) del elemento del cronómetro.
 * @param {string} contadorMinas Identificador (ID) del elemento del marcador de minas.
 * @returns {void}
 */
function generarTablero(tamaño, idBuscaminas, cronometro, contadorMinas) {
    const contenedor = document.getElementById(idBuscaminas);
    contenedor.innerHTML = "";
    contenedor.style.setProperty("--n", tamaño);

    let htmlTablero = "";

    for (let fila = 0; fila < tamaño; fila++) {
        for (let col = 0; col < tamaño; col++) {
            htmlTablero += `<div class="celda" id="celda-${fila}-${col}" onclick="pulsarCelda(${fila}, ${col}, '${cronometro}')" oncontextmenu="ponerBanderin(event, ${fila}, ${col}, '${contadorMinas}')"></div>`;
        }
    }

    contenedor.innerHTML = htmlTablero;
}

/**
 * Inicializa la matriz lógica del tablero tras el primer clic del jugador:
 * rellena la matriz con ceros, distribuye las minas aleatoriamente excluyendo
 * la casilla inicial y calcula el número de minas adyacentes para cada celda segura.
 *
 * @param {number} filaInicial Índice de fila de la primera casilla pulsada.
 * @param {number} colInicial Índice de columna de la primera casilla pulsada.
 * @returns {void}
 */
function iniciarTablero(filaInicial, colInicial) {
    // Crea la matriz N x N inicializada a 0
    tablero = [];
    for (let f = 0; f < tamañoActual; f++) {
        tablero[f] = [];
        for (let c = 0; c < tamañoActual; c++) {
            tablero[f][c] = 0;
        }
    }

    // Coloca las minas aleatoriamente (-1 = mina)
    let minasColocadas = 0;
    while (minasColocadas < minasTotales) {
        let fAleatoria = Math.floor(Math.random() * tamañoActual);
        let cAleatoria = Math.floor(Math.random() * tamañoActual);

        // Evita la casilla del primer clic y casillas que ya tengan mina
        if ((fAleatoria !== filaInicial || cAleatoria !== colInicial) && tablero[fAleatoria][cAleatoria] !== -1) {
            tablero[fAleatoria][cAleatoria] = -1;
            minasColocadas++;
        }
    }

    // Calcula los números de las casillas adyacentes
    for (let f = 0; f < tamañoActual; f++) {
        for (let c = 0; c < tamañoActual; c++) {
            if (tablero[f][c] !== -1) {
                let contadorMinas = 0;

                // Recorre las 8 casillas vecinas (de -1 a +1 en fila y columna)
                for (let df = -1; df <= 1; df++) {
                    for (let dc = -1; dc <= 1; dc++) {
                        let vecinaF = f + df;
                        let vecinaC = c + dc;

                        // Comprueba que la vecina no se salga de los límites del tablero
                        if (vecinaF >= 0 && vecinaF < tamañoActual && vecinaC >= 0 && vecinaC < tamañoActual) {
                            if (tablero[vecinaF][vecinaC] === -1) {
                                contadorMinas++;
                            }
                        }
                    }
                }

                tablero[f][c] = contadorMinas;
            }
        }
    }

    console.log("Solución del tablero:");
    console.table(tablero);
}

/**
 * Gestiona el evento de clic izquierdo sobre una casilla.
 * En el primer movimiento genera el tablero lógico y arranca el cronómetro;
 * posteriormente evalúa si la casilla es segura o detona una mina.
 *
 * @param {number} fila Índice de fila de la casilla pulsada.
 * @param {number} col Índice de columna de la casilla pulsada.
 * @param {string} cronometro Identificador (ID) del elemento HTML del cronómetro.
 * @returns {void}
 */
function pulsarCelda(fila, col, cronometro) {
    if (!juegoTerminado) {
        if (primerClick) {
            iniciarTablero(fila, col);
            iniciarCronometro(cronometro);
            primerClick = false;
        }

        let celdaHTML = document.getElementById(`celda-${fila}-${col}`);

        if (!celdaHTML.classList.contains("descubierta") && !celdaHTML.classList.contains("banderin")) {
            // Casilla segura
            if (tablero[fila][col] !== -1) {
                descubrirCasilla(fila, col);
                comprobarVictoria();
            } else {
                // Hay una mina
                juegoTerminado = true;
                detenerCronometro();
                mostrarTodasLasMinas();
            }
        }
    }
}

/**
 * Descubre una casilla segura y, en caso de tener 0 minas adyacentes,
 * propaga recursivamente el descubrimiento hacia sus ocho casillas vecinas.
 *
 * @param {number} fila Índice de fila de la casilla a descubrir.
 * @param {number} col Índice de columna de la casilla a descubrir.
 * @returns {void}
 */
function descubrirCasilla(fila, col) {
    // Comprueba los límites del tablero
    if (fila >= 0 && fila < tamañoActual && col >= 0 && col < tamañoActual) {
        let celdaHTML = document.getElementById(`celda-${fila}-${col}`);
        if (!celdaHTML.classList.contains("descubierta") && !celdaHTML.classList.contains("banderin")) {
            // Marca la casilla como descubierta visualmente
            celdaHTML.classList.add("descubierta");

            let valor = tablero[fila][col];

            if (valor > 0) {
                // Tiene minas alrededor: muestra el número y frena la expansión
                celdaHTML.innerText = valor;
                celdaHTML.classList.add(`num-${valor}`);
            } else if (valor === 0) {
                // Casilla libre: descubre automáticamente las casillas vecinas
                for (let df = -1; df <= 1; df++) {
                    for (let dc = -1; dc <= 1; dc++) {
                        if (df !== 0 || dc !== 0) {
                            descubrirCasilla(fila + df, col + dc);
                        }
                    }
                }
            }
        }
    }
}

/**
 * Alterna la colocación o retirada de un banderín mediante clic derecho sobre
 * una casilla oculta y actualiza el contador visual de minas restantes.
 *
 * @param {MouseEvent} evento Evento de ratón capturado por `oncontextmenu`.
 * @param {number} fila Índice de fila de la casilla marcada.
 * @param {number} col Índice de columna de la casilla marcada.
 * @param {string} contadorMinas Identificador (ID) del marcador de minas en el DOM.
 * @returns {void}
 */
function ponerBanderin(evento, fila, col, contadorMinas) {
    evento.preventDefault(); // Evita que se abra el menú contextual al hacer clic derecho

    if (!juegoTerminado) {
        let celdaHTML = document.getElementById(`celda-${fila}-${col}`);
        if (!celdaHTML.classList.contains("descubierta")) {
            if (celdaHTML.classList.contains("banderin")) {
                // Se quita el banderín y suma 1 al contador de minas
                celdaHTML.classList.remove("banderin");
                celdaHTML.innerHTML = "";
                minasRestantes++;
            } else {
                // Coloca el banderín y resta 1 al contador de minas
                celdaHTML.classList.add("banderin");
                celdaHTML.innerHTML = `<img src="./resources/icons/bandera.png" alt="Banderín">`;
                minasRestantes--;
            }
            document.getElementById(contadorMinas).innerText = minasRestantes;
        }
    }
}

/**
 * Recorre toda la matriz del tablero al finalizar la partida por derrota
 * y descubre visualmente la ubicación de todas las minas.
 *
 * @returns {void}
 */
function mostrarTodasLasMinas() {
    for (let f = 0; f < tamañoActual; f++) {
        for (let c = 0; c < tamañoActual; c++) {
            if (tablero[f][c] === -1) {
                let celdaMina = document.getElementById(`celda-${f}-${c}`);
                celdaMina.classList.add("descubierta", "mina");
                celdaMina.innerHTML = `<img src="./resources/icons/mina.png" alt="Mina">`;
            }
        }
    }
}

/**
 * Verifica si todas las casillas seguras del tablero han sido descubiertas.
 * En caso afirmativo, finaliza la partida, detiene el cronómetro y notifica la victoria.
 *
 * @returns {void}
 */
function comprobarVictoria() {
    let celdasDescubiertas = document.querySelectorAll(".celda.descubierta").length;
    let celdasTotales = tamañoActual * tamañoActual;

    if (celdasDescubiertas === celdasTotales - minasTotales) {
        juegoTerminado = true;
        detenerCronometro();
        alert(`¡Felicidades! Ganaste en ${segundos} segundos.`);
    }
}