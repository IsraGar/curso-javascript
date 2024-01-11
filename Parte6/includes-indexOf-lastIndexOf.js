//inludes(): Determina si un array incluye un determinado elemento, devuelve un booleano
const numbers = [1,2,3,4,5];
const result1 = numbers.includes(3);
console.log(result1);
const result2 = numbers.includes(6);
console.log(result2);

//indexOf(): Retorna el primer indice de un elemento que cumple con cierta condición, si no existe devuelve -1
const fruits = ['apple', 'banana','cherry'];
const indexApple = fruits.indexOf('apple');
console.log(indexApple);
const indexBanana = fruits.indexOf('bananas');
console.log(indexBanana);

//lastIndexOf(): Retorna el último indice de un elemento que cumple con cierta condición, si no existe devuelve -1
const numbersAgain = [2,4,6,8,10,6];
const lastIndex1 = numbersAgain.lastIndexOf(6);
console.log(lastIndex1);
const lastIndex2 = numbersAgain.lastIndexOf(5);
console.log(lastIndex2);