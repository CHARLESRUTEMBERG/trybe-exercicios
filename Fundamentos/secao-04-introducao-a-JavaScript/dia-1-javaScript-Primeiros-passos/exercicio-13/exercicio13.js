
salarioBruto = 1500.10;
let salarioSemInss;
let salarioLiquido;
if (salarioBruto > 5189.82){
    salarioSemInss = salarioBruto - 570.88;
}else if (salarioBruto > 2594.93 && salarioBruto <= 5189.82){
    salarioSemInss = salarioBruto * 0.89;
}else if (salarioBruto > 1556.95 && salarioBruto < 2594.92){
    salarioSemInss = salarioBruto * 0.91;
}else{
    salarioSemInss = salarioBruto * 0.92;
}
//console.log(salarioSemInss);
if (salarioSemInss > 4664.68){
    salarioLiquido = salarioSemInss - (salarioSemInss*0.275 - 869.36);
}else if (salarioSemInss >= 3751.06 && salarioSemInss <= 4664.68){
    salarioLiquido = salarioSemInss - (salarioSemInss*0.225 - 636.13);
}else if (salarioSemInss >= 2826.66 && salarioSemInss <= 3751.05){
    salarioLiquido = salarioSemInss - (salarioSemInss*0.15 - 354.80);
}else if (salarioSemInss >= 1903.99 && salarioSemInss <= 2826.65){
    salarioLiquido = salarioSemInss - (salarioSemInss*0.075 - 142.80);
}else if (salarioSemInss < 1903.98){
    console.log('Izendo do imposto');
    console.log(salarioSemInss.toFixed(2)); 
}else{
    console.log(salarioLiquido.toFixed(2));
}
