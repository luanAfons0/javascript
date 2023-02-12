var idade = 66;

console.log(`Você tem ${idade}`);

if(idade >= 18 && idade < 66){
    console.log('Você vota poha!')
}else{
    if(idade >= 16 && idade <18 || idade >=66){
        console.log('Vota so se quiser chupeta !');
    }
    else{
        console.log('Você não vota');
    }
};
