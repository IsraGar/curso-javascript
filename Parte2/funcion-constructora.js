const personalizedMessage = () => 'Goodbye everybody';

function Rocket(name){
    this.name = name;
    this.launchMessage = () => console.log(`Launching ${this.name}`);
}

const falcon9 = new Rocket('Falcon 9');
const falconHeavy = new Rocket('Falcon Heavy');
falcon9.launchMessage();
falconHeavy.launchMessage();

const RocketWithArrowFunction = (name, ownMessage) => ({
    name: name,
    launchMessage: ownMessage
})

const personalizedMessageForArrowFunction  = () => 'Successfull launch'
const falcon9Rocket = RocketWithArrowFunction('Falcon 9', personalizedMessageForArrowFunction);
console.log(falcon9Rocket.name,falcon9Rocket.launchMessage());
