window.onload = function () {
    let sala = document.getElementById('sala');
    let reservas = document.getElementById('reservas');
    let reservarBtn = document.getElementById('reservar');
    let f = 15;
    let c = 11;
    let seleccionadas = [
        [5, 4], [5, 5], [5, 6], [7, 2], [7, 3],
        [9, 7], [9, 8], [10, 5], [10, 6], [10, 7],
        [11, 7], [13, 8]
    ];
    let butacasSeleccionadas = [];

    function generarSala() {
        for (let i = 0; i < f; i++) {
            for (let j = 0; j < c; j++) {
                let butaca = document.createElement('div');
                butaca.id = `${i},${j}`;
                butaca.className = "butaca";
                butaca.textContent = `${i},${j}`;

                if (j === c - 2 || j === c - 3 || (i < 5 && (j < 3 || j > 7))) {
                    butaca.classList.add ("nobutaca");
                } else if (seleccionadas.some(b => b[0] === i && b[1] === j)) {
                    butaca.classList.add ("ocupada");
                } else {
                    butaca.classList.add ("libre");
                    butaca.addEventListener("click", function () {
                        seleccionarButaca(i, j);
                    });
                }

                sala.appendChild(butaca);
            }
        }
    }

    function seleccionarButaca(fila, columna) {
        let butaca = document.getElementById(`${fila},${columna}`);
        if (butaca.classList.contains ("libre")) {
            butaca.classList.remove ("libre");
            butaca.classList.add ("seleccion");
            butacasSeleccionadas.push([fila, columna]);

        }
    }

    reservarBtn.addEventListener("click", function () {
        butacasSeleccionadas.forEach(b => {
            let butaca = document.getElementById(`${b[0]},${b[1]}`);
            butaca.classList.remove("seleccion");
            butaca.classList.add("ocupada");
        });
        reservas.value = butacasSeleccionadas.map(b => `<${b[0]},${b[1]}>`).join(", ");
        butacasSeleccionadas = [];
    });

    generarSala();
};