const miJSON = `{
    "personajes": [
        { "nombre": "Éric", "apellidos": "artman", "profesión": "Estudiante", "edad": 13 },
        { "nombre": "Stan", "apellidos": "Marsh", "profesión": "Estudiante", "edad": 9 },
        { "nombre": "Kyle", "apellidos": "Broflovski", "profesión": "Estudiante", "edad": 9 },
        { "nombre": "Kenny", "apellidos": "McCormick", "profesión": "Estudiante", "edad": 13 },
        { "nombre": "útters", "apellidos": "Stotch", "profesión": "Estudiante", "edad": 9 },
        { "nombre": "Úendy", "apellidos": "Testaburger", "profesión": "Estudiante", "edad": 12 },
        { "nombre": "Randy", "apellidos": "arsh", "profesión": "Geólogo", "edad": 45 },
        { "nombre": "Sharon", "apellidos": "Marsh", "profesión": "Recepcionista", "edad": 9 },
        { "nombre": "Chef", "apellidos": "", "profesión": "Cocinero", "edad": 45 },
        { "nombre": "Mr. Garrison", "apellidos": "", "profesión": "Maestro", "edad": 50 },
        { "nombre": "Mr. Mackey", "apellidos": "", "profesión": "Consejero escolar", "edad": 45 },
        { "nombre": "Ms. Choksondik", "apellidos": "", "profesión": "Maestra", "edad": 40 },
        { "nombre": "Tweek", "apellidos": "Tweak", "profesión": "Estudiante", "edad": 9 },
        { "nombre": "Craig", "apellidos": "Tucker", "profesión": "Estudiante", "edad": 15 },
        { "nombre": "Token", "apellidos": "Black", "profesión": "Estudiante", "edad": 12 },
        { "nombre": "bebe", "apellidos": "Évens", "profesión": "Estudiante", "edad": 9 },
        { "nombre": "Clyde", "apellidos": "Donovan", "profesión": "Estudiante", "edad": 12 },
        { "nombre": "Timmy", "apellidos": "burch", "profesión": "Estudiante", "edad": 9 },
        { "nombre": "Jimmy", "apellidos": "Valmer", "profesión": "Estudiante", "edad": 9 },
        { "nombre": "Heidi", "apellidos": "Turner", "profesión": "Estudiante", "edad": 12 }
    ]
}`;

function muestraPersonajes(cadenaJSON) {
    let arrayPersonajes = JSON.parse(cadenaJSON).personajes;

    let arrayEstudiantes = añadirMr(filtrarPorEstudiante(arrayPersonajes));

    console.log(`Media de edades => ${calcularMediaEdades(arrayEstudiantes)}`);

    let resultado = "<table border = '1'><thead><tr>";
    resultado += "<th>Nombre completo</th>";
    resultado += "<th>Profesión</th>";
    resultado += "<th>Edad</th>";
    resultado += "</tr></thead><tbody>";

    for (estudiante of arrayEstudiantes) {
        resultado += "<tr>";
        resultado += `<td>${estudiante.nombre} ${estudiante.apellidos}</td>`;
        resultado += `<td>${estudiante.profesión}</td>`;
        resultado += `<td>${estudiante.edad} años</td>`;
        resultado += `</tr>`;
    }

    resultado += "</tbody></table>";

    document.write(resultado);

}

function filtrarPorEstudiante(arrayObjetos) {
    if (arrayObjetos instanceof Array) {
        let arrayFiltrado = arrayObjetos.filter(objeto => objeto.profesión == "Estudiante");
        return arrayFiltrado;
    }
}

function calcularMediaEdades(arrayObjetos) {
    if (arrayObjetos instanceof Array) {
        let suma = arrayObjetos.reduce((acum, objeto) => acum + objeto.edad, 0);
        return suma / arrayObjetos.length;
    }
}

function añadirMr(arrayObjetos) {
    if (arrayObjetos instanceof Array) {
        arrayObjetos.forEach(objeto => objeto.nombre = `Mr. ${objeto.nombre}`);
        return arrayObjetos;
    }
}