//1.Tipo entero y decimal
const entero = 42;
const decimal = 3.14;
console.log(typeof entero, typeof decimal);

//2.Notación científica
const cientifico = 5e3;

//3.Infinitos y NaN
const infinito = Infinity;
const noEsNumero = NaN;

//Operacion aritmétricas
//1.Suma, resta, multiplicación, división
const suma = 3 + 4;
const resta = 4 - 4;
const multiplicacion = 4 * 4;
const division = 16 / 4;

//2.Módulo y exponenciación
const modulo = 15 % 8;
const exponenciacion = 2 ** 3;

//Precisión
const resultado = 0.1 + 0.2;
console.log(resultado);
console.log(resultado.toFixed(1));

//Operaciones avanzadas Math
const raizCuadrada = Math.sqrt(81);
const valorAbsoluto = Math.abs(-7);
const numeroAleatorio = Math.random();
console.log(raizCuadrada, valorAbsoluto, numeroAleatorio);