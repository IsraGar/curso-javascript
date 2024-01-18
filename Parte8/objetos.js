/*
Estructura de datos -> Key/Value
propiedad/valor
objeto = {
    propiedad: valor,
    propiedad: valor,
    Metodos
}
 */

const persona = {
    nombre: 'Israel',
    apellidos: 'Garcia',
    edad: 27,
    direccion: {
        calle: 'Av. Insurgentes no 187',
        ciudad: 'CDMX'
    },
    saludar(){
        console.log(`Hola, mi nombre es ${persona.nombre}`);
    }
}

console.log(persona);
console.log(persona.apellidos);
persona.saludar();

persona.telefono = '5544332211';
console.log(persona);

persona.despedir = () => console.log('Adiós!');
persona.despedir();
console.log(persona);

console.log('Calle:', persona.direccion.calle);

delete persona.telefono;
console.log(persona);