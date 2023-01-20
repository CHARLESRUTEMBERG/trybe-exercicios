
function maiorQue(num1, num2){
    if (num1 > num2 ){
        return num1 + ' é maior que ' + num2;
    }else if(num1 < num2){
        return num2 + ' é maior que ' + num1;
    }else{
        return 'Os números são iguais.';
    }
}
console.log(maiorQue(20, 20));
