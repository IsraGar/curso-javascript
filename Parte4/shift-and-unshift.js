
//Shift: Elimina el primer elemento de un array y lo devuleve
const colors = ['yellow','blue','red'];
const removedColors = colors.shift();
console.log(colors);
console.log(removedColors);

//Unshift: Agrega uno o más elementos al principio de un array y devuelve el tamaño
const newColors = colors.unshift('black','purple');
console.log(colors);
console.log(newColors);

//Practical exercise: Managing a playlist

const initialPlaylist = ['What you know','Eventually'];
const newSongToAdd = 'The adults are talking';

function managePlaylist(playlist, newSong){
    playlist.shift();
    playlist.unshift(newSong);
    return playlist;
}

const updatedPlaylist = managePlaylist(initialPlaylist, newSongToAdd);
console.log('Initial playlist: ' + initialPlaylist);
console.log('New Song to add: '+ newSongToAdd);
console.log('Updated Playlist: ' + updatedPlaylist);