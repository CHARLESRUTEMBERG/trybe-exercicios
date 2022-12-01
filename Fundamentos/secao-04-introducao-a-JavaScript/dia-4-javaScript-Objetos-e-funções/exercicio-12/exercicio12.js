
function maiorDeTres(a, b, c){
    if (a > b && a > c){
        return 'O mairo dos três é: ' + a;
    }else if(b > a && b > c){
        return 'O maior dos três é: ' + b;
    }else{
        return 'O maior dos três é: ' + c;
    };
};
console.log(maiorDeTres(50,30,40));
