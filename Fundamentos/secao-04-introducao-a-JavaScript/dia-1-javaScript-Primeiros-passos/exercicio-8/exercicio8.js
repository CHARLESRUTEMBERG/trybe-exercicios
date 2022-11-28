

//let text = "Hello World!";

//console.log(text.toLowerCase());

let pecaXadrez = 'Qeen'

switch(pecaXadrez.toLowerCase()){
    case 'king':
        console.log('O rei pode mover-se em qualquer direção, porém apenas uma casa por vez.');
        break;
    case 'lady':
        console.log('A rainha assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.');
        break;
    case 'tower':
        console.log('A torre move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.');
        break;
    case 'pawn':
        console.log('Peões se movem somente para frente, uma casa por vez');
        break;
    case 'Bishop':
        console.log('O bispo se move em uma linha reta diagonalmente no tabuleiro. Ele pode mover-se por tantas casas quantas quiser, até encontrar o final do tabuleiro ou outra peça. O bispo não pode pular outras peças. O bispo captura no mesmo caminho em que ele se move, parando na casa da peça adversária.');
        break;
    case 'horse':
        console.log('O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. O movimento do cavalo forma um “L”.');
        break;
    case 'queen':
        console.log('A rainha pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente. A rainha se move como a torre e o bispo combinados. A menos que esteja realizando uma captura, o movimento deve terminar em uma casa desocupada e ela não pode pular outras peças.');
        break;
default:
    console.log('Nome da peça iválida!');
}