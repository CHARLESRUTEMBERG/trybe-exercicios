
function anguloDeTriangulo(primeiroAngulo, segundoAngulo, terceitoAngulo){
    if (primeiroAngulo > 0 && segundoAngulo > 0 && terceitoAngulo > 0){
        
        if (primeiroAngulo + segundoAngulo + terceitoAngulo == 180){
            return primeiroAngulo + segundoAngulo + terceitoAngulo == 180;
        }else{
            return primeiroAngulo + segundoAngulo + terceitoAngulo == 180;
        }
    }else{
        return 'Algum valor está inválido.';
    }
}
console.log(anguloDeTriangulo(30,30,120));