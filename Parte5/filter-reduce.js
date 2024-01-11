//No modifican el array original
// filter(): Crea un nuevo array con los elementos que cumplen una condicion dada
const numbers = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = numbers.filter(num => num % 2 == 0);
console.log(numbers);
console.log(evenNumbers);

//reduce(): Reduce cada elemento de un array devolviendo un solo valor. Caso 1
const numbersReduce = [1,2,3,4,5];
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(numbersReduce);
console.log(sum);

//Caso 2
const words = ['apple','banana','hello','bye','banana','bye','bye'];
const wordFrequency = words.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]){
        accumulator[currentValue]++;
    }else{
        accumulator[currentValue] = 1;
    }
    return accumulator;
},{});
console.log(words);
console.log(wordFrequency);