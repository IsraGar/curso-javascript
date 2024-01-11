//concat() une dos o más arrays
//Way 1
const morseCode1 = ['....','----']; //H O
const morseCode2 = ['.-..','.-']; //L A
const morseCodeMessage = morseCode1.concat(morseCode2);
console.log(morseCodeMessage);

//Way 2
const morseCodeMessage2 = [].concat(morseCode1, morseCode2);
console.log(morseCodeMessage2);

//spread() une dos o más arrays
function combineMorseMessages(morseCode1, morseCode2){
    console.log([...morseCode1, ...morseCode2]);
}
combineMorseMessages(morseCode1, morseCode2);

const numbers = [1,2,3];
const string = 'string';
combineMorseMessages(numbers, string);

//join(): concatena todos los elementos de un array en una cadena de texto, separado por un delimitador especifico
const morseCodeMessageString = morseCodeMessage.join('');
console.log(morseCodeMessageString);
const morseCodeMessageString2 = morseCodeMessage.join('end ');
console.log(morseCodeMessageString2);