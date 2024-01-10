//Como crear un array
//1. new Array() o Array()
const fruits = Array('apple','banana','orange');
console.log(fruits);

const numbers = Array(1,2,3,4);
console.log(numbers);

//2. Array literal sintax
const oneNumber = [4];
console.log(oneNumber);

const emptyArray = [];
console.log(emptyArray);

const sports = ['soccer','tennis','rugby'];
console.log(sports);

const recipeIngredients = ['Fluor',true, 2, { ingredient: 'Milk', quantity: '1 cup' }, false];
console.log(recipeIngredients);

//Accssing array elements
const firstFruit = fruits[0];
console.log(firstFruit);

//Length property
const numberOfFruits = fruits.length
console.log(numberOfFruits);

//Mutability
fruits.push('watermelon');
console.log(fruits);

//Inmutability
const newFruits = fruits.concat(['grape','kiwi']);
console.log(fruits);
console.log(newFruits);

//Checkin arrays with Array.isArray()
const isArray = Array.isArray(fruits);
console.log(isArray);

//Practical exercise: Sum all elements of an array
const numbersArray = [1,2,3,4,5];
let sum = 0;
for (let i=0;i<numbersArray.length;i++){
    sum += numbersArray[i];
}
console.log(sum);