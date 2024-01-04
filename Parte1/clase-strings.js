//Creación de string
const primeraOpcion = 'Comillas simples';
const segundaOpcion = "Comillas dobles";
const terceraOpcion = `Comillas simples`;

//1.Concatenación: Opción +
const direccion = 'Calle falsa 123';
const ciudad = 'Springfield';
const direccionCompleta = 'Mi dirección es: ' + direccion + ', ' + ciudad;
console.log(direccionCompleta);

//2.Concatenación: Template literals
const nombre = 'Israel';
const pais = 'México';
const presentacion = `Hola soy ${nombre} de ${pais}`;
console.log(presentacion);

//3.Concatenación: join()
const primeraParte = 'Me encanta';
const segundaParte = 'la gente de';
const terceraParte = 'Colombia';
const pensamiento = [primeraParte, segundaParte, terceraParte];
console.log(pensamiento.join(' '));

//4.Concatenación: comcat()
const hobbie1 = 'Futbol';
const hobbie2 = 'Gimnasio';
const hobbie3 = 'Música';
const hobbies = 'Mis hobbies son: '.concat(hobbie1, ', ', hobbie2, ', ', hobbie3);
console.log(hobbies);

//Caracteres de escape
//const wahtDoIDo = 'I'm software Engineer';

//1.Escape alternativo
const escapeAlternativo = "I'm software Engineer";

//2.Barra invertida
const barraInvertida = 'I\'m software Engineer';

//3.Template literals
const templateLiterals = `I'm software Engineer`;

//Escritura de Strings largos

/*
    Las rosas son rojas,
    Las violetas son azules,
    Caracter inesperado
    en la línea 86
*/ 

const poema = 'Las rosas son rojas, \n' +
                'Las violetas son azules, \n' + 
                'Caracter inesperado, \n' +
                'en la línea 86';
console.log(poema);

const poema2 = 'Las rosas son rojas, \n\
Las violetas son azules, \n\
Caracter inesperado, \n\
en la línea 86';
console.log(poema2);

const poema3 = `Las rosas son rojas,
Las violetas son azules,
Caracter inesperado,
en la línea 86`;
console.log(poema3);