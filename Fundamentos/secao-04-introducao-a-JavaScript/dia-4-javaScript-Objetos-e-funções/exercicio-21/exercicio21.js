

function maisRepete (numeroInteiro){
    let numeroMaisRepete = 0;
    let cont = 0;
    let contAtual = 0;
    for (let index1 in numeroInteiro){
        for (let index2 in numeroInteiro){
            if (numeroInteiro[index1] == numeroInteiro[index2]){
                cont ++;
            }
        }
        if (contAtual < cont){
            contAtual = cont
            numeroMaisRepete = numeroInteiro[index1];
        }
        cont = 0;
    }
    return (numeroMaisRepete);
}
console.log(maisRepete([2, 3, 2, 5, 8, 2, 3]));