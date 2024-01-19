/* 
this -- class
this--objeto-class
Hace referencia a un objeto
*/

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

const persona1 = new Persona('Alice',25);
console.log(persona1);