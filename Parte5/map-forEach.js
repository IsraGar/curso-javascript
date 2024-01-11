//No modifican el array original
//map() aplica una función a cada elemento de un array y construye uno nuevo con los resultados
const numbers = [1,2,3,4,5];
const squareNumbers = numbers.map(num => num * num);
console.log(numbers);
console.log(squareNumbers);

//forEach: itera sobre cada uno de los elementos y ejecuta una función sin crear un nuevo array
const colors = ['red', 'pink', 'blue'];
const iteratedColors = colors.forEach(color => console.log(color))
console.log(colors);

//Fahrenheit to Celsius conversion Exercise
const temperaturesFahrenheit = [32,68,95,104,212];
const temperaturesCelsius = temperaturesFahrenheit.map(fahrenheit => {
    return (fahrenheit - 32) * 5/9;
});

console.log('Temperatures in Fahrenheit: ' + temperaturesFahrenheit);
console.log('Temperatures in Celsius: ' + temperaturesCelsius);

//Sum of elements in an array
let sum = 0;
const numbersSum = [1,2,3,4,5];
const newNumbersSum = numbersSum.forEach(num => sum += num);
console.log(numbersSum);
console.log(sum);
