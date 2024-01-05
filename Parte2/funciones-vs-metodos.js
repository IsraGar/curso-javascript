//Capacidades de las funciones al igual que otros objetos
//1. Pasar funciones como argumentos -> Callback
/*
function a (){}
function b (a){}

//Retornar funciones
function a (){
    function b (){}
    return b
}

//Asignar funciones a variables -> expresión de función
const a = function () {}

//Tener propiedades y métodos
function a (){}
const obj = {}
a.call(obj)

//Anidar funciones -> Nested functiones
function a (){
    function b (){
        function c(){

        }
        c()
    }
    b()
}
a()
*/

//Es posible almacenar funciones en objetos?
const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage(){
        console.log('Launching Falcon 9');
    }
}
rocket.launchMessage();