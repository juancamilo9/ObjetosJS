// Esta variable va acontener a todos nuestros usuarios
let usuarios  = [];

// constructos para el objeto usuario
function Usuario(nombre,apellido,contacto,email,profesion){
    this.nombre = nombre;
    this.apellido = apellido;
    this.contacto = contacto;
    this.email = email;
    this.profesion = profesion;
}

function registrarUsuario(){
    // Declaramos las variable y capturamos los datos de los input
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let profesion = document.getElementById("profesion").value;
    let email = document.getElementById("email").value;
    let contacto = document.getElementById("contacto").value;

    // creamos el objeto usuario
    usuario = new Usuario(nombre,apellido,contacto,email,profesion);
    //Agregamos el objeto usuario al array usuarios
    usuarios.push(usuario);
}

function listarUsuarios(){
    // Capturamos el contenedor de las filas
    let listaUsuarios = document.getElementById("listaUsuarios")
    for (const u of usuarios) {
        // Creamos una fila
        let fila = document.createElement("tr");
        for (const x in u) {
            // Creamos una celda, agregamos su valor y lo insertamos en la fila
            let celda = document.createElement("td");
            celda.textContent = u[x];
            fila.appendChild(celda);
        }
        listaUsuarios.appendChild(fila);
    }
}