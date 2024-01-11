//Faffle Winner Verification Program
const winningParticipants = [
    { id: 1, name: 'Jennifer', ticketNumber: 120},
    { id: 8, name: 'Michael', ticketNumber: 215},
    { id: 45, name: 'Emily', ticketNumber: 444},
    { id: 63, name: 'Charlie', ticketNumber: 245},
    { id: 99, name: 'Isra', ticketNumber: 345}
];

function findWinnerByName(name){
    const winner = winningParticipants.find(participants => participants.name === name);
    return winner || 'No winner found with that name';
}

function findIndexWinnerByTicketNumber(ticket){
    const index = winningParticipants.findIndex(participants => participants.ticketNumber === ticket);
    return index !== -1 ? index : 'No winner found with that ticket number';
}

function displayWinnerInformation(winner){
    if(winner !== undefined && winner !== null && winner !== 'No winner found with that name'){
        console.log('Winner information: ', winner);
    }else{
        console.log('No winner found.');
    }
}

const winnerByName = findWinnerByName('Isra');
const indexWinnerByTicket = findIndexWinnerByTicketNumber(120);

displayWinnerInformation(winnerByName);
console.log('Index of winner by Ticket number: ', indexWinnerByTicket);