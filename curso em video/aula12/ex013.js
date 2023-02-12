var agora = new Date();
var diaSem = agora.getDay();

switch(diaSem){
    case 0:
        console.log('Hj é domingo');
        break
    
    case 1:
        console.log('Hj é segunda');
        break
    
    case 2:
        console.log('Hj é terça');
        break

    case 3:
        console.log('Hj é quarta');
        break

    case 4:
        console.log('Hj é quinta');
        break

    case 5:
        console.log('Hj é sexta');
        break

    case 6:
        console.log('Hj é sabado');
        break

    default:
        console.log('[ERRO] Dia invalido');
        break
}
