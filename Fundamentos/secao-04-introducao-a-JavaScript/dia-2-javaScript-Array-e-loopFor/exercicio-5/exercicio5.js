
//Percorra o array imprimindo todos os valores nele contidos com a função console.log();

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let numbers = [6, 10, 4, 16, 70, 8, 150, 1, 38, 22];
let soma = 0; // para acumular e somar os valores
let cont = 0; // vai acumlar o index para fazer a divisão da média
for (let index = 0; index < numbers.length; index ++){

    console.log(numbers[index]);
    cont = index
//Some todos os valores contidos no array e imprima o resultado;

    soma = soma + numbers[index];

}

    console.log('soma dos valores: ' + soma);

//Calcule e imprima a média aritmética dos valores contidos no array;
    let media = soma/(cont+1);
    console.log('Média aritmética ' + media);

//Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

if (media > 20){
    console.log('Valor maior que 20');
}else {
    console.log('Valor menor ou igual a 20');
}

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let v1 = 0;
let v2 = 0;
for (let index = 0; index < numbers.length; index ++){

   if (v1 < numbers[index]){
    v1 = numbers[index];
   }
}
    console.log('Maior valor do Array: ' + v1);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

soma = 0;
for (let index = 0; index < numbers.length; index ++){

    if (numbers[index]%2 != 0){
        soma = soma + 1;
    }
 }
 if (soma != 0){
    console.log('Quantidade de ímpares: ' + soma);
 }else {
    console.log('nenhum ímpar encontrado');
 }
 
 //Utilizando for, descubra qual o menor valor contido no array e imprima-o;
 //let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


v1 = numbers[0];
for (let index = 0; index < numbers.length; index ++){

   if (v1 < numbers[index]){
    v1 = v1;
   }else {
    v1 = numbers[index];
   }
}
    console.log('Menor valor do Array: ' + v1);

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

for (let cont = 1; cont <= 25; cont ++){
    
    //Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

    console.log(cont + ' / 2 = ' + cont/2);
}


