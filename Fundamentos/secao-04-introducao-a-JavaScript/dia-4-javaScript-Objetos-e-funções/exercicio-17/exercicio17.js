let palavraReversa = ''
function verificaPalindrome(palavra){

    palavraReversa = palavra.split('').reverse().join('');
    console.log(palavraReversa);
    if (palavra == palavraReversa){
        return true;
    }else{
        return false;
    }
}

    console.log(verificaPalindrome('banana'));