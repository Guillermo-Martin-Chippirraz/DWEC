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

function ordenaJson(cadenaJSON) {
    let objetos = JSON.parse(cadenaJSON).personajes;

    let objetosSort = objetos.sort(comparador);

    let resultado = "<ul>";
    for (objeto of objetosSort) {
        resultado += `<li>${objeto.nombre} ${objeto.apellidos}`;
        resultado += `<ul>`;
        resultado += `<li>Profesión: ${objeto.profesión}</li>`;
        resultado += `<li>Edad: ${objeto.edad}</li>`;
        resultado += `</ul></li>`;
    }

    resultado += "</ul>";

    console.log(resultado);
    document.write(resultado);

}

function comparador(primerObjeto, segundoObjeto) {

    if (primerObjeto.edad != segundoObjeto.edad)
        return primerObjeto.edad - segundoObjeto.edad;
    else if (primerObjeto.apellidos.localeCompare(segundoObjeto.apellidos) != 0)
        return primerObjeto.apellidos.localeCompare(segundoObjeto.apellidos);
    else return primerObjeto.nombre.localeCompare(segundoObjeto.nombre);
}