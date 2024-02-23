let alumnos = ['alumnos', 'Cliente', 'Servidor', 'Diseño', 'Despliegue'];

let Notas = [
    ['PILAR', 4,8,9.3,10],
    ['ISMAEL', 5,9,8.8,10],
    ['MARIA', 10, 9.8, 8, 9],
    ['FRANCISCO', 9.6, 8,9,9],
    ['MANUEL', 8,6, 3.8,8]
];

Notas.push(['Pablo', 7, 6.7, 6.8,8]);

let medias = [];

function crearTabla() {
    document.write('<table border="2">');
    document.write('<tr>');

    for(let i = 0; i < alumnos.length; i++) {
        document.write("<th>" + alumnos[i] + "</th>");
        
    }
    document.write("<th>media</th>");


    for (let i = 0; i < Notas.length; i++){
        document.write('<tr>');
        let suma = 0;
        for(let j = 0; j < Notas[i].length; j++){
            document.write("<td>"+ Notas[i][j] +"</td>");
            if (j>0) {
                suma += Notas[i][j];
            }
        }

        let media = (suma/(Notas[i].length - 1)).toFixed(2);
        document.write("<td>" + media + "</td></tr>");
        medias.push(media);
    }
    document.write("</table>");
}

crearTabla();

// CALCULAMOS LA MAXIMA NOTA EN CLIENTE
let maximo = 0;
let alumno = "";

for (let i=0; i < medias.length; i++){
    if ( maximo < medias[i]) {
        maximo = medias[i];
        alumno = Notas[i][0];
    }
}

document.write("<br>La nota mas alta  es de " + maximo + " por el alumno: " + alumno);

// CALCULAMOS LA MAXIMA NOTA EN CLIENTE

let notaAlta = 0;
let alumn = "";

for (let i = 0; i < Notas.length; i++) {
    if (notaAlta < Notas[i][1]) {
        notaAlta = Notas[i][1];
        alumn = Notas[i][0];
    }
}

document.write("<br>La nota mas alta en cliente es: " + notaAlta + " por el alumno: " + alumn);
 
// CALCULA LA NOTA MEDIA DE DESPLIEGUE
let med = 0;

for (let i = 1; i < Notas.length; i++ ) {
    med += parseInt(Notas[i][4]);
}

let mediaFinal = (med / (Notas.length - 1)) ;

document.write("<br>La media de despliegue es: " + mediaFinal);
