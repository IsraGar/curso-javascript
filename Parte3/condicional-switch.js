let expr = 'Mango';

switch (expr) {
    case 'Naranja':
        console.log('El costo por kilo de naranjas es de $20');
        break;
    case 'Manzana':
    case 'Pera':
        console.log('El costo por kilo de manzanas o de peras es de $30');
        break;
    case 'Mango':
        console.log('El costo por kilo de mangos es de $25');
        break;
    default:
        console.log('No tengo ese tipo de fruta');
        break;
}