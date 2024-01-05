//Enlace implicito o Implicit Binding
const house = {
    dogName: 'Fido',
    dogGreeting: function (){
        console.log(`Hi. I'm ${this.dogName}`);
    }
}

house.dogGreeting();

//Enlace explicito o Explicit Binding
function dogGreeting(){
    console.log(`Hi. I'm ${this.dogName} and I'm ${this.dogAge} years old`);
}

const newHouse = {
    dogName: 'Coconut',
    dogAge: 2
}

dogGreeting.call(newHouse);

function newDogGreeting(owner, address){
    console.log(`Hi. I'm ${this.dogName}, my owner is ${owner} and we live in ${address}`);
}

const owner = 'Lucy'
const address = 'Av. Central 123'
newDogGreeting.call(newHouse, owner, address);