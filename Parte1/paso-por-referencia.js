//Paso por referencia
//Tipo de dato complejo
let frutas = {
    naranja: '🍊'
}

let vegetales = frutas;

vegetales.naranja = '🍍';
console.log(frutas);

let ropa = {
    blusa: '👚'
}

ropa.pantalon = '👖';
console.log(ropa);
