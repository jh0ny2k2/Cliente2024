function sumarFila() {
    let tabla = document.getElementById('tabla');

    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;
    let numero3 = document.getElementById('numero3').value;

    //let tr = document.createElement('tr');
    //let tdNum1 = document.createElement('td');
    //let tdNum2 = document.createElement('td');
    //let tdNum3 = document.createElement('td');
    //let tdButton = document.createElement('td');

    let nuevoTr = tableBody.insertRow();
    let tdNum1 = nuevoTr.insertCell(0);
    let tdNum2 = nuevoTr.insertCell(1);
    let tdNum3 = nuevoTr.insertCell(2);
    let tdButton = nuevoTr.insertCell(3);

    tdNum1.textContent = numero1;
    tdNum2.textContent = numero2;
    tdNum3.textContent = numero3;
    tdButton.textContent = '<button onclick="sumarFila()">+</button><button onclick="restarFila()">-</button>';

    
}