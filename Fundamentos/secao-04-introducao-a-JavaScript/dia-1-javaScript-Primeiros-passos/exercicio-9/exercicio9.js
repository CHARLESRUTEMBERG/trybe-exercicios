
porcente = 60;

if (porcente > 0 && porcente < 100){
    if (porcente >= 90){
        console.log('Você tirou conceito A');
    }else if (porcente >= 80){
        console.log('Você tirou conceito B');
    }else if (porcente >= 70){
        console.log('Você tirou conceito C');
    }else if (porcente >= 60){
        console.log('Você tirou conceito D');
    }else{
        console.log('Você tirou conceito E');
    }
}else{
    console.log('Valor inválido!');
}