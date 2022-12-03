
function inicioIgualFinal(palavra1, palavra2){
    palavra1 = palavra1.split('');
    palavra2 = palavra2.split('');
    controle = true;
   
    for (let index = 0; index < palavra2.length; index ++){
        if (palavra1[palavra1.length - palavra2.length + index] != palavra2[index]){
            controle = false;
        }       
    }
    return controle;
}
console.log(inicioIgualFinal('trybe', 'be'));
console.log(inicioIgualFinal('joaofernando', 'fernan'));