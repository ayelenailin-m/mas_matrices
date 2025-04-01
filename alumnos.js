let alumnos = [];

function agregarOModificarAlumno() {
    let nombre = prompt("Nombre del alumno:").trim();
    
    let alumnoExistente = alumnos.find(alumno => alumno[0] === nombre);
    
    if (alumnoExistente) {
        alert(`${nombre} ya está registrado.`);
        return modificarNotas(alumnoExistente);
    }

    let materias = [];
    while (true) {
        let materia = prompt("Materia (o ENTER para terminar):").trim();
        if (materia === "") break;
        let nota = parseInt(prompt(`Nota en ${materia}:`));
        materias.push([materia, nota]);
    }

    alumnos.push([nombre, materias]);
    alert(`${nombre} agregado correctamente.`);
}

function modificarNotas(alumno) {
    console.log(`Notas actuales de ${alumno[0]}:`, alumno[1]);
    let materia = prompt("Materia a modificar o agregar:").trim();
    let nota = parseInt(prompt(`Nueva nota para ${materia}:`));

    let materiaExistente = alumno[1].find(m => m[0] === materia);
    
    if (materiaExistente) {
        materiaExistente[1] = nota;
        alert("Nota modificada.");
    } else {
        alumno[1].push([materia, nota]);
        alert("Materia y nota agregadas.");
    }
}

function mostrarAlumnos() {
    console.clear();
    console.log("Lista de alumnos y notas:");
    alumnos.forEach(alumno => console.log(`${alumno[0]}:`, alumno[1]));
}

while (true) {
    let opcion = prompt("\n1. Agregar/Modificar Alumno\n2. Mostrar Notas\n3. Salir\n> ");
    if (opcion === "1") {
        agregarOModificarAlumno();
    } else if (opcion === "2") {
        mostrarAlumnos();
    } else if (opcion === "3") {
        break;
    } else {
        alert("Opción inválida.");
    }
}
