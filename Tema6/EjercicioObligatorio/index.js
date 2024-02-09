window.onload = crearTablero;
function crearTablero() {
  //Botones
  document.getElementById("limpiar").addEventListener("click", limpiar);
  document.getElementById("rojo").addEventListener("click", pintarRojo);
  document.getElementById("blanco").addEventListener("click", pintarBlanco);
  document.getElementById("ajedrez").addEventListener("click", ajedrez);
  document.getElementById("sumaR").addEventListener("click", sumarRojas);
  document.getElementById("sumaB").addEventListener("click", sumarBlancas);

  //Tablero
  let tablero = document.getElementById("tablero");
  let numero = 0;

  // CREAMOS FOR PARA PRINTEAR TABLERO
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {

        // CREAMOS EL DIV PARA CADA CELDA
        let casilla = document.createElement("div");

        // LE ASIGNAMOS LAS VARIABLES A LA CELDA CREADA ANTERIORMENTE
        numero = numAleatorio();
        casilla.setAttribute("id", numero);
        casilla.className = "casilla blanca";
        casilla.textContent = numero;
        casilla.addEventListener("click", seleccionar);

        // METEMOS LA CELDA EN EL TABLERO
        tablero.appendChild(casilla);
    }
  }
}

// FUNCION PARA CREAR  UN NUMERO ALEATORIO
function numAleatorio() {
    let numero = 0;
    numero = Math.round(Math.random() * 15) + 1;

    // RETURNAMOS EL NUMERO ALEATORIO 
    return numero;
}

// FUNCION PARA SELECCIONAR LA CELDA PULSADA Y LA PINTAMOS DE ROJO
function seleccionar(evento) {
    // CAPTURAMOS EL EVENTO
    let celda = evento.target;

    // LE ASIGNAMOS LA CLASE
    celda.className = "casilla roja";
}

// FUNCION PARA PONER TABLERO EN BLANCO
function limpiar() {
  let tablero = document.getElementById("tablero");

  // HACEMOS UN FOR PARA RECORRER TODOS LOS DIV QUE HAY EN EL TABLERO
  for (let i = 0; i < tablero.getElementsByTagName("div").length; i++) {

    // COMPROBAMOS SI LA CLASE ES ROJA Y SE PONE EN BLANCA
    if (tablero.getElementsByTagName("div")[i].className == "casilla roja") {
      tablero.getElementsByTagName("div")[i].className = "casilla blanca";
    }
  }
}

// FUNCION PARA PINTAR CASILLAS EN BLANCO
function pintarBlanco() {
  let tablero = document.getElementById("tablero");

  // HACEMOS UN FOR PARA RECORRER TODOS LOS DIV QUE HAY EN EL TABLERO
  for (let i = 0; i < tablero.getElementsByTagName("div").length; i++) {

    // PONEMOS LA FUNCION A LOS DIV
    tablero.getElementsByTagName("div")[i].addEventListener("click",function () {
        // ASIGNAMOS LA CLASE A LA CASILLA
        this.className = "casilla blanca";
        }
    );
  }
}

// FUNCION PARA PINTAR EN ROJO
function pintarRojo() {
  let tablero = document.getElementById("tablero");

  // HACEMOS UN FOR PARA RECORRER TODOS LOS DIV QUE HAY EN EL TABLERO
  for (let i = 0; i < tablero.getElementsByTagName("div").length; i++) {

    // PONEMOS LA FUNCION A LOS DIV
    tablero.getElementsByTagName("div")[i].addEventListener("click",function() {
        // PONEMOS LA FUNCION A LOS DIV
        this.className = "casilla roja";
      }
    );
  }
}

// FUNCION PARA SUMAR LAS CASILLAS ROJAS
function sumarRojas() {
  let suma = 0;
  let tablero = document.getElementById("tablero");

  // HACEMOS UN FOR PARA RECORRER TODOS LOS DIV QUE HAY EN EL TABLERO
  for (let i = 0; i < tablero.getElementsByTagName("div").length; i++) {

    // COMPROBAMOS QUE LA CELDA TENGA LA CLASE ROJA
    if (tablero.getElementsByTagName("div")[i].className == "casilla roja") {
        // SUMAMOS AL VALOR DE LA VARIABLE SUMA
        suma += parseInt(tablero.getElementsByTagName("div")[i].id);
    }
  }

  // LO PRINTEAMOS EN EL DIV RESULTADO
  document.getElementById("resultado").innerHTML = " la rojas son: " + suma;
}

// FUNCION PARA SUMAR LAS CASILLAS BLANCAS
function sumarBlancas() {
  let suma = 0;
  let tablero = document.getElementById("tablero");
  
  // HACEMOS UN FOR PARA RECORRER TODOS LOS DIV QUE HAY EN EL TABLERO
  for (let i = 0; i < tablero.getElementsByTagName("div").length; i++) {

    // COMPROBAMOS QUE LA CELDA TENGA LA CLASE BLANCA
    if (tablero.getElementsByTagName("div")[i].className == "casilla blanca") {
        // SUMAMOS AL VALOR DE LA VARIABLE SUMA
        suma += parseInt(tablero.getElementsByTagName("div")[i].id);
    }
  }

  // LO PRINTEAMOS EN EL DIV RESULTADO
  document.getElementById("resultado").innerHTML = " la blancas son: " + suma;
}

// FUNCION PARA PRINTEAR EL TABLERO MODO AJEDREZ
function ajedrez() {
    let tablero = document.getElementById("tablero");

    // HACEMOS UN FOR PARA RECORRER TODOS LOS DIV QUE HAY EN EL TABLERO
    for (let i = 0; i < tablero.getElementsByTagName("div").length; i++) {
        if (i < 4 || (i > 7 && i < 12)) {
            if (i % 2 == 0)
                tablero.getElementsByTagName("div")[i].className = "casilla blanca";
            else 
                tablero.getElementsByTagName("div")[i].className = "casilla roja";
        } else if ((i > 3 && i < 8) || i > 11) {
            if (i % 2 == 0)
                tablero.getElementsByTagName("div")[i].className = "casilla roja";
            else 
                tablero.getElementsByTagName("div")[i].className = "casilla blanca";
        }
    }
}








