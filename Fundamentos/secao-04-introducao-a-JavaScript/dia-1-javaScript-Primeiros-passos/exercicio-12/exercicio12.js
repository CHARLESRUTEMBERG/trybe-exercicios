const custoProduto = 1000;
const valorVenda = 5000;

if (custoProduto > 0 && valorVenda > 0){
    //custoTotal = custoProduto * 1.2;
    //console.log(custoTotal);
    lucroLiquido = valorVenda - custoProduto * 1.2; 
    console.log(lucroLiquido);
}else{
    console.log('Valor inválido!');
}
