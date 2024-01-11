//slice(n,n) Crea una copia superficial de una porción del array
//No modifica el array original
const animals = ['ant','bison','camel','duck','elephant'];
console.log(animals.slice(2)); //Lo toma como indice

console.log(animals.slice(2, 4)); //Limite inferior, limite superior-1

console.log(animals.slice(1, 5));

console.log(animals.slice(-2)); //Empieza por la última posición

console.log(animals.slice(2, -1));

console.log(animals.slice()); //Devuelve todo el array