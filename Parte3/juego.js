const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt(prompt('Adivina el número secreto entre 1 y 10'));

console.log(`Este es el número con el que juegas: ${numeroJugador}`);

if(numeroJugador === numeroSecreto){
    console.log('Ganaste, adivinaste el número secreto');
}else{
    console.log('Sigue intentando');
}