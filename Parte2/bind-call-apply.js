const owner = 'Isra';
const address = 'Av. Central 1234';

function dogGreeting (owner, address){
    console.log(`Hi. I'm ${this.dogName}, my owner is ${owner} and we live in ${address}`);
}

//Call
const newHouse = {
    dogName: 'Cooper'
}

dogGreeting.call(newHouse, owner, address);

//Apply
const necessaryValues = [owner, address];

dogGreeting.apply(newHouse, necessaryValues);

//Bind
const bindindWithBind = dogGreeting.bind(newHouse, owner, address);
bindindWithBind();