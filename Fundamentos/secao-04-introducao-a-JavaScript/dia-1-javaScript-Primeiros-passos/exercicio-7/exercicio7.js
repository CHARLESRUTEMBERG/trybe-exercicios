
//Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:

a = -10;
b = -75;
c = -65;
//Adição (a + b)
console.log("Adição de a com b é igual a:  " + (a + b));
//Subtração (a - b)
console.log('Subtração entre a e b é igual a: ' + (a - b));
//Multiplicação (a * b)
console.log('Multiplicação entre a e b é igual a: ' + (a * b));
//Divisão (a / b)
console.log('Divisão entre a e b é igual a: ' + (a / b));
//Módulo (a % b)
console.log('Módulo de a por b é igual a: ' + (a%b));
//Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.
if (a > b) {
    console.log('Maior valor entre a e b: ' + a);
}else {
    console.log('Mairo valor entre a e b: ' + b);
}
//Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.
if (a > b && a > c){
    console.log('Maior valor entre a, b e c: ' + a);
}else if (b > c && b > a){
    console.log('Maior valor entre a, b e c: ' + b);
}else {
    console.log('Maior valor entre a, b e c: ' + c);
}
//Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
if (a < 0){
    console.log('O valor de a é negativo');
}else if (a === 0){
    console.log('O valor de a é 0');
}else{
    console.log('O valor de a é positivo');
}
//🚀 Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

//Um ângulo será considerado inválido se não tiver um valor positivo.

d = 60;
e = 60;
f = 60;

if (d > 0 && e > 0 && f> 0 ){
    if ((d + e + f) === 180){
        console.log((d + e + f) === 180);
    }else{
        console.log((d + e + f) === 180);
    }
}else{
    console.log('Um dos ângulos é inválido');
}

