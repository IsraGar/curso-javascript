/*let persona = {
    nombre: 'Isra',
    apellidos: 'Garcia',
    edad: 27
}*/

function Persona(nombre, apellidos, edad){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
}

const persona1 = new Persona('Juan', 'Perez', 27);
console.log(persona1);

persona1.nacionalidad = 'Mexicano';

console.log(persona1);

const persona2 = new Persona('Pedro', 'Gomez', 26);

console.log(persona2);

Persona.prototype.saludar = function (){
    console.log(`Hola, soy ${this.nombre} ${this.apellidos}`);
}

persona1.saludar();
persona2.saludar();