//find(): Devuelve el valor del primer elemento que cumple con la función de prueba proporcionada
//Si no hay elementos que cumplan, devuelve -1.
const multipleOf5 = [5,10,15,20]
const firstNumberGreaterThan10 = multipleOf5.find(number => number > 10);
console.log(multipleOf5);
console.log(firstNumberGreaterThan10);

//findIndex(): Devuelve el indice del primer elemento que cumple con la función de prueba proporcionada
//si no hay ninguno, devuelve -1
const randomNumbers = [6,14,27,56,40];
const indexNumber = randomNumbers.findIndex(number => number > 50);
console.log(randomNumbers);
console.log(indexNumber);