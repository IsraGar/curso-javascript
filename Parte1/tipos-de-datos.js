//Mutabilidad e inmutabilidad

//Tipo de dato primitivo - Inmutable
let numero = 27;
numero = numero + 23;
console.log(numero);

let esVerdadero = true;
esVerdadero = false;
console.log(esVerdadero);

//Tipos de datos complejos - Mutable
let usuario = {
    nombre: 'Isra',
    edad: 27
};

usuario.edad = 25;
console.log(usuario);

let frutas = ['manzana', 'pera'];
frutas[0] = 'mango';
console.log(frutas);

function cambiarNombre(objeto){
    objeto.nombre = 'IsraG';
}

let persona = { nombre: 'Israel', edad: 25 };
cambiarNombre(persona);
console.log(persona);