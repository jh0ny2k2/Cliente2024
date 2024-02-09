// TRAEMOS BOTONES
let btnEnviar = document.getElementById("enviar");

// TRAEMOS EL DIV PARA PRINTEAR LOS INTENTOS
let intentos = document.getElementById("intentos");

// VINCULAMOS EL BOTON CON EL EVENTO
btnEnviar.addEventListener("click",  validarFormulario);

// CREAMOS FUNCION PARA VALIDAR EL FORMULARIO
function validarFormulario() {
    if (validarNombre() && validaEmail() && validaNacimiento() && validarNif() && validarPassword() && validarConfirmarPassword()) {
        if (confirmar("seguro que quieres enviar el formulario?")) {
            incrementarIntentos();
            return true;
        } else {
            alert ("Envio cancelado");
            return false;
        }
    }
} 

function validarNombre() {
    let nombre = document.getElementById("nombre");

    if (nombre.value.trim() === '') {
        alert("El nombre no puede estar vacio");
        return false;
    } else {
        errorNombre.textContent = "";
        return true;
    }
}

function validarEmail() {
    let email = document.getElementById("email");
    let patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!patron.test(email.value)) {
        alert("El email no es valido");
        return false;
    } else {
        return true;
    }
}

function validarNacimiento() {
    let nacimiento = document.getElementById("nacimiento");
    let errorNacimiento = document.getElementById("errorNacimiento");

    let patron = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

    if (patron.test(nacimiento.value)) {
        return true;
    } else {
        alert("Error en formato de la fecha");
        return false;
    }
}

function validarNif () {
    let nif = document.getElementById("nif");

    let patron = /^\d{8}-[a-zA-Z]$/;

    if (patron.test(nif.value)) {
        return true;
    } else {
        alert("error en el nif");
        return false;
    }  
}

function validarPassword () {
    let password = document.getElementById("password");
    let errorPassword = document.getElementById("errorPassword");

    let patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (patron.test(password.value)) {
        return true;
    } else {
        alert("error en el apartado de la contraseña");
        return false;
    }
}

function validarConfirmarPassword() {
    let password = document.getElementById("password");
    let confirmarPass = document.getElementById("confirmarPass");
    let errorConfirmarPass = document.getElementById("errorConfirmarPass");
    
    if (password.value === confirmarPass.value) {
        return true;
    } else {
        alert("las contraseñas no coinciden");
        return false;
    }
}














