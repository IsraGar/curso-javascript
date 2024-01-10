/*
El usuario tiene 3 intentos para adivinar la palabra oculta.
Requerimientos:
-Debe haber una palabra oculta
-Debe darse una pista de la palabra
-Usuario debe ingresar una suposición
-Verificar suposición
-Número limitado de intentos (3)
-Juego termina si adivina palabra o se acaban intentos
 */
let palabrasOcultas = [
    { oculta: 'Javascript', pista: 'Lenguaje de programación muy popular en web' },
    { oculta: 'Perro', pista: 'Mascota recurrente en la gente' },
    { oculta: 'Futbol', pista: 'Deporte más popular a nivel mundial' },
    { oculta: 'Cuadrado', pista: 'Figura geométrica de lados iguales' },
    { oculta: 'Reloj', pista: 'Aparato que sirve para dar la hora' },
]
let intentos = 3;
const indicePalabra = Math.floor(Math.random() * 5);
const palabraOculta = palabrasOcultas[indicePalabra].oculta;
const pistaPalabra = palabrasOcultas[indicePalabra].pista;
const longitudPalabra = palabraOculta.length;
let suposicion = '';
let isCorrect = false;

console.log(indicePalabra, palabraOculta, pistaPalabra, longitudPalabra);

alert(`Juguemos a adivinar una palabra oculta
Tienes 3 intentos para adivinar la palabra`);

while(intentos > 0){
    intentos--;
    alert(`La palabra oculta tiene ${longitudPalabra} letras
Te dejo una pista para que adivines 😀:
-${pistaPalabra}`);
    suposicion = prompt('Ingresa cuál es la palabra que crees que esta oculta');
    isCorrect = evaluarPalabra(suposicion);
    console.log(`Intentos: ${intentos}`);
}

if(isCorrect){
    alert(`Haz ganado, la palabra oculta era ${palabraOculta}`);
}else{
    alert(`Fallaste, la palabra oculta era ${palabraOculta}`);
}

function evaluarPalabra(suposicion){
    if(palabraOculta === suposicion){
        intentos = 0;
        return true;
    }else{
        return false;
    }
}