
//Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function positveNegative(valor){
    if (valor > 0){
        return 'O número é positivo: ';
    }else if (valor < 0){
        return 'O número é negativo: ';
    }else{
        return 'O número é zero.';
    }
}
console.log(positveNegative(0));
