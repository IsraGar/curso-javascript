//Explicit type casting
const string = '42';
const integer = parseInt(string);
console.log(integer);
console.log(typeof integer);

const stringDecimal = '3.14';
const float = parseFloat(stringDecimal);
console.log(float);
console.log(typeof float);

const binary = '0111';
const decimal = parseInt(binary, 2);
console.log(decimal);
console.log(typeof decimal);


//Implicit type casting
const sum = '5' + 3;
console.log(sum);

const sumWithBoolean = '3' + true;
console.log(sumWithBoolean);

const sumWithNumber = 2 + true;
console.log(sumWithNumber);

const stringValue = '10';
const numberValue = 10;
const booleanValue = true;
console.log('--------------------');
console.log(stringValue + stringValue); //SI HAY STRING CONCATENA, SI NO SUMA
console.log(stringValue + numberValue);
console.log(stringValue + booleanValue);

console.log(numberValue + stringValue);
console.log(numberValue + numberValue);
console.log(numberValue + booleanValue);

console.log(booleanValue + stringValue);
console.log(booleanValue + numberValue);
console.log(booleanValue + booleanValue);