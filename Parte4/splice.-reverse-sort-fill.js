//Splice: Cambia el contenido de un array eliminando elelentos existentes y/o agregando nuevos elementos
const vegetables = ['carrot','broccoli','spinach','tomato'];
const removedVegetables = vegetables.splice(2, 1, 'cucumber','onion');
console.log(vegetables);
console.log(removedVegetables);

//Reverse: Invierte el orden de los elementos de un array, el primer elemento pasa a ser el último
const numbers = [1,2,3,4,5];
const reversedNumbers = numbers.reverse();
console.log(numbers);
console.log(reversedNumbers);

//Sort: Ordena los elementos de un array y devuelve el array ordenado. Numeros
const unsortedNumbers1 = [4,18,1,62,34];
const unicodeNumbers = unsortedNumbers1.sort();
console.log(unsortedNumbers1);
console.log(unicodeNumbers);

const unsortedNumbers2 = [4,18,1,62,34];
const sortedNumbers = unsortedNumbers2.sort((a, b) => a - b);
//4 - 18 = -14
//18 - 1 = 17
console.log(unsortedNumbers2);
console.log(sortedNumbers);
//Sort: Ordena los elementos de un array y devuelve el array ordenado. String(UTF-16)
const cities = ['Mexico','Tokio','London','Paris'];
const sortedCities = cities.sort();
console.log(cities);
console.log(sortedCities);

//Fill: Cambia los valoresde un array por un valor estatico desde un indice inicial a uno final
const ages = [21,35,45,50];
console.log(ages.fill(0,2,4));
console.log(ages.fill(15, 1));
console.log(ages.fill(15));
