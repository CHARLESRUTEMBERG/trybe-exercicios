//Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10
fatorial = 0;
for (let index = 10; index >= 1; index --){
    if (index === 10){
        fatorial = 10;
    }else{
        fatorial = fatorial * index;
    }
}
console.log(fatorial);
