document.addEventListener('DOMContentLoaded', function() {
  // Función para generar un número aleatorio del 1 al 15
  function obtenerNumeroAleatorio() {
    return Math.floor(Math.random() * 15) + 1;
  }

  // Obtener el elemento tbody de la tabla
  var tablaBody = document.getElementById('tabla-body');

  // Crear filas y celdas en la tabla y llenarlas con números aleatorios
  for (var i = 0; i < 4; i++) {
    var fila = document.createElement('tr');

    for (var j = 0; j < 4; j++) {
      var celda = document.createElement('td');
      celda.textContent = obtenerNumeroAleatorio();
      fila.appendChild(celda);
    }

    tablaBody.appendChild(fila);
  }
});

