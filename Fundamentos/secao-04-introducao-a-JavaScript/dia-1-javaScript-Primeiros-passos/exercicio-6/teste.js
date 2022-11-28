
mes = 'janeir';
estacaoDoAno = '?';

switch (mes) {
    case 'janeiro':
    case 'fevereiro':
    case 'março':
        estacaoDoAno = 'Verão';
        break;
    case 'abril':
    case 'maio':
    case 'junho':
        estacaoDoAno = 'Outono';
        break;
    case 'julho':
    case 'agosto':
    case 'setembro':
        estacaoDoAno = 'Inverno';
        break;
    case 'outubro':
    case 'novembro':
    case 'dezembro':
        estacaoDoAno = 'Primavera';
    break

}
if (estacaoDoAno === "?"){
    console.log('Você não digitou o mês do ano: ' + estacaoDoAno );
}else{
    console.log(estacaoDoAno);

}
//console.log(estacaoDoAno); // 'Outono'
