
let numeralRomano = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
}

function transforme(numeral){
    numeral = numeral.toString().toLowerCase();
    const tamanho = numeral.length;
    let soma = numeralRomano[numeral[tamanho - 1]];
    let valorAtual = numeralRomano[numeral[tamanho - 1]];
    for (let index = 2; index <= tamanho; index ++){
        const proximo = numeralRomano[numeral[tamanho - index]];
        console.log(numeral[tamanho - index]);
        if (valorAtual <= proximo){
            soma = soma + proximo;
        }else{
            soma = soma - proximo;
        }
        valorAtual = proximo
    }
   return soma;
}

console.log(transforme('MMXVIII')); // 2018
console.log(transforme('VI')); // 6
console.log(transforme('IV')); // 4
console.log(transforme('II'));
console.log(transforme('MMMCCXLIV'));
