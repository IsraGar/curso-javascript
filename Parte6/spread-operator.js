//spread-operator
//1. copia arrays
const originalArray = [1,2,3,4,5];
const copiedArray = [...originalArray];
console.log(copiedArray);

//2. Combinar arrays
const array1 = [1,2,3];
const array2 = [4,5,6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray);

//3. Crea arrays con elementos adicionales
const base = [1, 2, 3];
const arrayWithAditionalElements = [...base,4,5,6];
console.log(arrayWithAditionalElements);

//4. Pasar parametros a una función
function sum(a, b, c){
    return a + b + c;
}

const numbers = [1,2,3];
const result = sum(...numbers);
console.log(result);