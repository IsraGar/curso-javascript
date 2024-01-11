//No modifican el array original
//every(): Determina si TODOS los elementos de un array satisfacen una condición, devuelve un booleano
const ages = [21,25,30,19,22];
const allAreAdults = ages.every(age => age > 18);
console.log(allAreAdults);

//some(): Determina si alguno de los elementos de un array satisfacen una condición, devuelve un booleano
const atLeastOneIsOver30 = ages.some(age => age >= 30);
console.log(atLeastOneIsOver30);