document.addEventListener("DOMContentLoaded", function() {
    let tablero = document.getElementById("tablero");

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let div = document.createElement('div');
            if (i % 2 == 0 || j % 2 == 0) { 
                if (i % 2 != 0 || j % 2 != 0) {
                    div.className = "celdaB";
                } else {
                    div.className = "celdaN";
                }
            } else {
                div.className = "celdaN";
            }

            if (i === 0) {
                let ficha = document.createElement('div');
                ficha.className = ficha1filaNegra(j);
                div.appendChild(ficha);
            }

            if (i === 7) {
                let ficha = document.createElement('div');
                ficha.className = ficha1filaBlanca(j);
                div.appendChild(ficha);
            }

            if (i === 1) {
                let ficha = document.createElement('div');
                ficha.className = ficha2filaNegra(j);
                div.appendChild(ficha);
            }

            if (i === 6) {
                let ficha = document.createElement('div');
                ficha.className = ficha2filaBlanca(j);
                div.appendChild(ficha);
            }

            tablero.appendChild(div);
        }
    }



    function ficha1filaBlanca(numero) {
        let fichas = [
            "torreB", "caballoB", "alfilB", "reyB", "reinaB", "alfilB", "caballoB", "torreB"
        ];
        return fichas[numero];
    }

    function ficha1filaNegra(numero) {
        let fichas = [
            "torreN", "caballoN", "alfilN", "reyN", "reinaN", "alfilN", "caballoN", "torreN"
        ];
        return fichas[numero];
    }

    function ficha2filaBlanca(numero) {
        let fichas = [
            "peonB", "peonB", "peonB", "peonB", "peonB", "peonB", "peonB", "peonB"
        ];
        return fichas[numero];
    }

    function ficha2filaNegra(numero) {
        let fichas = [
            "peonN", "peonN", "peonN", "peonN", "peonN", "peonN", "peonN", "peonN"
        ];
        return fichas[numero];
    }
});