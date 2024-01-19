/*
1. El usuario debe poder ingresar su usuario y contraseña
2. El sistema debe de ser capaz de validar si el usuario y contraseña ingresados existen en la BD
3. En caso correcto mostrar mensaje de bienvenida mostrar el timeline del usuario
4. En caso incorrecto mostrar mensaje de error y no mostrar timeline
*/

const usersDatabase = [
    {
        username: "andres",
        password: "123"
    },
    {
        username: "caro",
        password: "456"
    },
    {
        username: "mariana",
        password: "789"
    }
];

const usersTimeline = [
    {
        username: "Estefany",
        timeline: "Me encanta Javascript"
    },
    {
        username: "Oscar",
        timeline: "Bebeloper es lo mejor"
    },
    {
        username: "Mariana",
        timeline: "A mí me gusta más el café que el té"
    },
    {
        username: "Andres",
        timeline: "Yo hoy no quiero trabajar"
    }
];

const username = 'mariana';
const password = '789';
let hasProfile = false;

function userValidate(username, password){
    usersDatabase.forEach(user => {
        if (user.username === username) {
            if(user.password === password){
                hasProfile = true;
            }
        }
    });
    return hasProfile;
}

function showTimeline() {    
    usersTimeline.forEach(timel => {
        console.log(`Usuario: ${timel.username}`);
        console.log(`Comentario: ${timel.timeline}`);
    });
}

function loginUser(){
    let date = new Date;
    if (userValidate(username, password)) {
        console.log(`Bienvenid@ "${username}"`);
        console.log(`Hora de inicio de sesión ${date.toString()}`);
        console.log("Cargando el timeline de tu red social, espere por favor...");
        setTimeout(showTimeline, 2000);        
    }else{
        console.log('Usuario o contraseña no válidos, verifique sus datos');
    }
}

loginUser();