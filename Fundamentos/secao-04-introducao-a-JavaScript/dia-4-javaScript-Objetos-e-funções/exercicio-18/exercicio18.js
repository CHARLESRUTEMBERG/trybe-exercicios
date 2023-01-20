
function posicaoMaiorValor(posicao){
    let maiorIndice = 0;
    for (let indice in posicao){
        
        if (posicao[maiorIndice] < posicao[indice]){
            maiorIndice = indice;
        }
    }
    return maiorIndice;
}
console.log(posicaoMaiorValor([2, 21, 6, 11, 10, 30]))