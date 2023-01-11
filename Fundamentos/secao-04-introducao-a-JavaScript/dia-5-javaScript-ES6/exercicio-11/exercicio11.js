let arrayPalavras = [];
function palavraMaior (frase){
    const arrayPalavras = [];
    let numCaracter = 0;
    let palavra = '';
    arrayPalavras = frase.split(' ');
    for (let index of arrayPalavras) {
        if (index.length > numCaracter){
            numCaracter = index.length;
            palavra = index;
        }
    }
    return palavra;
}
console.log(palavraMaior('Antônio foi no banheiro e não sabemos o que aconteceu inconstitucional'));