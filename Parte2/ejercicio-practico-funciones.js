//Create PowerfuffGirl objects
function PowerfuffGirl(name, color, superPower){
    this.name = name;
    this.color = color;
    this.superPower = superPower;
    this.isLeader = false;

    this.displayInfo = function(){
        console.log(`PowerfuffGirl Information:
Name: ${this.name},
Color: ${this.color},
Super Power: ${this.superPower}
${this.isLeader ? 'Leader : Yes' : 'Leader: No'}
`);
    }

    this.becomeLeader = function(){
        this.isLeader = true;
        console.log(`${this.name} has become the leader of the Powerfuff Girls!
        `);
    }
}

const blossom = new PowerfuffGirl('Blossom', 'Pink', 'Ice Breath');
const buttercup = new PowerfuffGirl('Buttercup', 'Green', 'Super strength');
const bubbles = new PowerfuffGirl('Bubbles', 'Blue', 'Flight');

blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();

blossom.becomeLeader();
blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();



