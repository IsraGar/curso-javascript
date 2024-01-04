//String primitivos
const stringPrimitivo = 'Soy un string primitivo';
console.log(typeof stringPrimitivo);

const stringPrimitivoTambien = String('Soy un string primitivo');
console.log(typeof stringPrimitivoTambien);

//String objeto
const stringObjeto = new String('Soy un string objeto');
console.log(typeof stringObjeto);

//Acceder a caracteres
const saludo = 'Hola. Cómo estás?';
console.log(saludo[0]);
console.log(saludo.charAt(0));
console.log(saludo.indexOf('H'));
console.log(saludo.indexOf('Cómo'));
console.log(saludo.indexOf('Como'));
console.log(saludo.lastIndexOf('o'));
console.log(saludo.slice(3, 5));
console.log(saludo.length);
console.log(saludo.toLocaleLowerCase());
console.log(saludo.toUpperCase());
console.log(saludo.split(' '));
console.log(saludo.trim());
console.log(saludo.replace('Hola', 'Qué tal'));