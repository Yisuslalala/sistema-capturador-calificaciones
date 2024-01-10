let MAX_ALUMNOS = 0;
let TOTAL_DE_MATERIAS = 5;

let alumnos = [];
let promediosGenerales = 0;
let promedioGeneral = 0;

let FIN = false;

function agregarAlumno() {
  if (alumnos.length === MAX_ALUMNOS && FIN) {
    alert("Capacidad de captura alcanzada");
  } else {
    let alumno = capturarAlumno();
    alumnos.push(alumno);
    promedioGeneral = calcularPromedioGeneral(promediosGenerales);
    alert(
      `Alumno: ${alumno["nombre"]} ${alumno["apellido"]} \nDe ${alumno["carrera"]}, cursa el semestre ${alumno["semestre"]} \nCalificaciones: \nProgramación: ${alumno["progra"]}, Inglés: ${alumno["ingles"]}, Matemáticas: ${alumno["mate"]}, Contabilidad: ${alumno["conta"]}, Administración: ${alumno["admin"]}`
    );
    alert(
      `${alumno["nombre"]} ${alumno["apellido"]} \nTiene ${alumno["promedio"]} de promedio`
    );
    if (alumnos.length === MAX_ALUMNOS) {
      FIN = true;
    }
  }
}

function capturarAlumno() {
  const nombre = String(asignarDato("Ingrese el nombre del alumno"));
  const apellido = String(asignarDato("Ingrese el apellido del alumno"));
  const carrera = String(asignarDato("Ingrese la carrera del alumno"));
  const semestre = String(asignarDato("Ingrese el semestre el alumno"));
  const progra = Number(asignarDato("Ingrese la calificación de programación"));
  const ingles = Number(asignarDato("Ingrese la calificación de inglés"));
  const mate = Number(asignarDato("Ingrese la calificación de matemáticas"));
  const conta = Number(asignarDato("Ingrese la calificación de contabilidad"));
  const admin = Number(
    asignarDato("Ingrese la calificación de administración")
  );
  const promedio = Number(calcularPromedio(progra, ingles, mate, conta, admin));
  promediosGenerales += promedio;

  return {
    nombre,
    apellido,
    carrera,
    semestre,
    progra,
    ingles,
    mate,
    conta,
    admin,
    promedio,
  };
}

function asignarDato(mensaje) {
  while (true) {
    try {
      let dato = prompt(mensaje);
      if (dato === null)
        throw new Error("Salida innesperada, ingrese un dato de verdad");
      if (dato === "")
        throw new Error("Ingresó un valor vacío, vuelva a intentar");

      return dato;
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  }
}

function calcularPromedio(progra, ingles, mate, conta, admin) {
  return (progra + ingles + mate + conta + admin) / TOTAL_DE_MATERIAS;
}

function calcularPromedioGeneral(promediosGenerales) {
  return promediosGenerales / alumnos.length;
}

function mostrarPromedio() {
  if (alumnos.length === 0) {
    alert("Aún no se han ingresado alumnos, por lo tanto el promedio es 0");
  } else if (alumnos.length === 1) {
    alert(`Del alumno capturado el promedio general es: ${promedioGeneral}`);
  } else {
    alert(
      `De los ${alumnos.length} alumnos capturados el promedio general es ${promedioGeneral}`
    );
  }
}
