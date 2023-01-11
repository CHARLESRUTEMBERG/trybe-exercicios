
function maiorCaracter(palavras){
    let maiorCaracter = palavras[0];
    for (let index in palavras){
        if (maiorCaracter.length < palavras[index].length){
            maiorCaracter = palavras[index];
            //console.log(mairoCaracter);
        }

    }
    return maiorCaracter;

}

console.log(maiorCaracter(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));