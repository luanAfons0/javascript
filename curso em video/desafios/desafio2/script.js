function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.querySelector('#age');
    var res = document.querySelector('.res');
    if( fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e preencha novamente !');
    }else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id','foto');
        if( fsex[0].checked){
            genero = 'Homem';
            if( idade >= 0 && idade <10){
                //crianca
                img.setAttribute('src','criance.jpg');
            }else if (idade <21){
                //jovem
                img.setAttribute('src','jovem.jpg');
            }else if ( idade <50){
                //adulto
                img.setAttribute('src','adulto.jpg');
            }else{
                //idoso
                img.setAttribute('src','idoso.jpg');
            }
        }else{
            genero = 'Mulher';
            if( idade >= 0 && idade <10){
                //crianca
                img.setAttribute('src','crianca.jpg');
            }else if (idade <21){
                //jovem
                img.setAttribute('src','jovena.jpg');
            }else if ( idade <50){
                //adulto
                img.setAttribute('src','adulta.jpg');
            }else{
                //idoso
                img.setAttribute('src','idosa.jpg');
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos !`;
    };

};