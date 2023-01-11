

function posicaoMenorValor(posicao){
    let menorIndice = 0;
    for (let indice in posicao){
        
        if (posicao[indice] < posicao[menorIndice]){
            menorIndice = indice;
        }
    }
    return menorIndice;
}
console.log(posicaoMenorValor([2, 4, 6, 7, 10, 0, -3]));