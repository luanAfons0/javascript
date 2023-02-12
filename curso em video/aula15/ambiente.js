let num = [5,8,4];
num[3] = 6 ;
num.push(7); 

console.log(`Nosso vetor é o ${num} !`);
console.log(`Nosso vetor tem ${num.length} elementos !`);
console.log(`O primeiro elemento do vetor é ${num[0]}`); 
console.log(`Nosso vetor em ordem crescente é ${num.sort()} !`);

let pos = num.indexOf(8);
if( pos == 1 ){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor  esta na posição ${pos}`);
};
