// Función para saludar al usuario
function saludar(nombre, apellido) {
    return "Bienvenido " + nombre + " " + apellido;
}

// Objeto para representar un invitado
class Invitado {
    constructor(nombre, apellido, email, asistencia) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.asistencia = asistencia;
    }
}

// Array para almacenar los invitados
let listaInvitados = [];

// Método para agregar un invitado a la lista
function agregarInvitado(nombre, apellido, email, asistencia) {
    let invitado = new Invitado(nombre, apellido, email, asistencia);
    listaInvitados.push(invitado);
}

// Método para buscar un invitado por su correo electrónico
function buscarInvitadoPorEmail(email) {
    return listaInvitados.find(invitado => invitado.email === email);
}

// Método para filtrar invitados por su decisión de asistencia
function filtrarInvitadosPorAsistencia(decision) {
    return listaInvitados.filter(invitado => invitado.asistencia === decision);
}

// Función para preguntar por la asistencia a la boda
function preguntarAsistencia() {
    let nombre = prompt("Escriba su nombre.");
    let apellido = prompt("Escriba su apellido.");
    let email = prompt("Necesitamos un email para poder mandar la información.");
    let decision = prompt("Va a asistir a nuestra boda? (responda 'si' o 'no')");
    let respuesta1 = "Perfecto, gracias por confirmar su asistencia.";
    let respuesta2 = "Gracias por confirmar su inasistencia.";
    let invalidar = "Perdón, pero usted no tiene la edad suficiente.";

    console.log(saludar(nombre, apellido));
    console.log("Correo electrónico: " + email);
    console.log("Decisión de asistencia: " + decision);

    if (decision.toLowerCase() === "si") {
        var edad = prompt(nombre + " " + apellido + ", escriba su edad:");
        if (edad >= 18) {
            agregarInvitado(nombre, apellido, email, "Asistirá");
            alert(respuesta1);
        } else {
            alert(invalidar);
        }
    } else if (decision.toLowerCase() === "no") {
        agregarInvitado(nombre, apellido, email, "No Asistirá");
        alert(respuesta2);
    } else {
        alert("Opción no válida.");
    }
}

// Llamamos a la función preguntarAsistencia para simular el proceso
let contador1 = 0;
while (contador1 < 3) {
    preguntarAsistencia();
    contador1++;
}
