window.onload = iniciar();

function iniciar() {
    let btnEnviar = document.getElementById("enviar")
    btnEnviar.addEventListener('click', validarFormulario, false);

} 

function validarFormulario() {
    if (contadorIntentos() && validarNombre() && validarApellidos() && validarEdad() && validarNif() && validarEmail() && validarProvincia() && validarFecha() && validarTelefono() && validarHora() && confirm("¿Seguro que quieres enviar el formulario?")) {
        return true;
    } else {
        return false;
    }  
}

function validarNombre () {
    let nombre = document.getElementById("nombre").value;
    let errores = document.getElementById("errores");

    if (nombre === "") {
        errores.textContent = "El campo de nombre es obligatorio";
        return false;
    }

    return true;
}

function validarApellidos() {
    let apellidos = document.getElementById("apellidos").value;
    let errores = document.getElementById("errores");

    if (apellidos === "") {
        errores.textContent = "El campo de apellidos es obligatorio";
        return false;
    }

    return true;
}

function validarEdad () {
    let edad = document.getElementById("edad").value;
    let errores = document.getElementById("errores");

    if (isNaN(parseInt(edad)) || edad < 0 || edad > 105) {
        errores.textContent = "El campo debe de ser un numero y estar entre 0 y 105";
        return false;
    }

    return true; 
}

function validarNif () {
    let nif = document.getElementById("nif").value;
    let errores = document.getElementById("errores");
    let patron = /^\d{8}-[A-Z]{1}$/;

    if (!patron.test(nif)) {
        errores.textContent = "El campo de nif deberá ser 12345678-X";
        return false;
    }

    return true;
}

function validarEmail () {
    let email = document.getElementById("email").value;

    let patron = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let errores = document.getElementById("errores");

    if (!patron.test(email)) {
        errores.textContent = "El campo de email deberá ser aaa@aaa.aaa";
        return false;
    }

    return true;
}

function validarProvincia() {
    let provincia = document.getElementById("provincia");
    let errores = document.getElementById("errores");

    if (provincia.selectedIndex == 0) {
        errores.textContent = "Deberás señeccionar al menos 1";
        return false;
    }

    return true;
}

function validarFecha() {
    let nacimiento = document.getElementById("fecha").value;
    let errores = document.getElementById("errores");
    let patron = /^\d{2}-\d{2}-\d{4}$/; //Formato: DD-MM-YYYY
    let patron1 = /^\d{2}\/\d{2}\/\d{4}$/;

    if (!patron.test(nacimiento) && !patron1.test(nacimiento)) {
        errores.textContent = "El campo de nif deberá ser DD-MM-YYY O DD/MM/YYYY";
        return false;
    } 
    
    return true;
}

function validarTelefono () {
    let  telefono = document.getElementById("telefono").value;
    let patron = /^\d{9}$/; //Formato: 123456789
    let errores = document.getElementById("errores");
    if (!patron.test(telefono)) {
        errores.textContent = "El campo de telefono deberá ser de nueve numeros 123456789";
        return false;
    }

    return true;
}

function validarHora() {
    let hora = document.getElementById("hora").value;
    let errores = document.getElementById("errores");
    let patron = /^\d{1,2}:\d{1,2}$/;

    if(!patron.test(hora)) {
        errores.textContent = "El campo de hora deberá ser HH:mm (00:00 a 23:59)";
        return false;
    }

    return true;
}

function contadorIntentos()
{
	let contador=0;
	
	// Si no existe la cookie la creamos y grabamos el texto contador=0.
	if (document.cookie == "")
		document.cookie="contador=0";

	contador=document.cookie.substring(9);
	contador++;
	document.cookie="contador="+contador;
	document.getElementById("intentos").textContent="Intento de Envíos del formulario: "+contador+".";
	return true;
}