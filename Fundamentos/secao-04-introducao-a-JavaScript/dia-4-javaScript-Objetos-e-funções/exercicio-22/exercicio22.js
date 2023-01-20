
function numeroNatural(numero){
    let soma = 0;
    for (let index = 1; index <= numero; index ++){
        soma = soma + index;
        
    }
    return soma;
}
console.log(numeroNatural(5))