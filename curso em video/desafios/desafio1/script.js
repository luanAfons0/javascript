var hour = new Date();
var hora = hour.getHours();
var resultado = window.document.querySelector('.resultado');

//Noite
if( hora >= 18 && hora <=24 ){
    resultado.innerHTML = `São ${hora} da noite`;
    window.document.querySelector('.stylekk').style.background='rgb(102, 101, 101)';
    window.document.querySelector('.imgfluid').src="imgs14/noite.jpg";

//Tarde
}else if ( hora >=12 && hora < 18 ){
    resultado.innerHTML = `São ${hora} da tarde`;
    window.document.querySelector('.stylekk').style.background ='rgba(255, 166, 0, 0.603)';
    window.document.querySelector('.imgfluid').src="imgs14/tarde.jpg";

//Manhã
}else if( hora >= 0 && hora <12){
    resultado.innerHTML = `São ${hora} da manhã`;
    window.document.querySelector('.stylekk').style.background ='rgba(255, 255, 0, 0.63)';
    window.document.querySelector('.stylekk').style.color='rgba(39, 36, 36, 0.747)';
    window.document.querySelector('.imgfluid').src="imgs14/dia.jpg";
};