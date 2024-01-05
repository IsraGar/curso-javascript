//Function
const greeting = function (name) {
    return `Hi, ${name}`;
}

//Arrow function - explicit return
const newGreeting = (name) => {
    return `Hi, ${name}`;
}

//Arrow function - implicit return
const newGreetingImplicit = name => `Hi, ${name}`;
const newGreetingImplicitWithParameters = (name, lastName) => `Hi, ${name} ${lastName}`;

//Lexical Binding
const finctionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`);
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`);
    }
}

finctionalCharacter.messageWithTraditionalFunction('With great power comes great responsability');
finctionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus');