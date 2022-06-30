
function calcular(n1, n2){
    const primeiraMensagem = criaPrimeiraMensagem(n1,n2);
    const segundaMensagem = criaSegundaMensagem(n1, n2);
    
    return `${primeiraMensagem} ${segundaMensagem}`

}

function criaPrimeiraMensagem(n1,n2){
    let igual ='';

    if(n1 !== n2){
        igual ='nao';
    }

    return `os numeros ${n1} e ${n2} ${igual} sao iguais.`;
}

function criaSegundaMensagem(n1, n2){
    const soma = n1+n2;

    let result10 ='menor'
    let result20 = 'menor'
    const valor10 = soma >10;
    const valor20 = soma >20;

    if (valor10){
        result10 ='maior'
    }

    if (valor20){
        result20 ='maior'
    }

    return `sua soma é ${soma}, que é ${result10} que 10 e ${result20} que 20.`
}

console.log(calcular(10, 10))
