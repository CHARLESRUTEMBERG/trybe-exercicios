
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  //Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console:



console.log('Bem-vinda, ' + info.personagem);
  //Bem-vinda, Margarida

  //Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console:
info['recorrente'] = 'Sim';
console.table(info);

//Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
let index1;

for (let key in info){
  if (index1 == null){ 
    console.log('')
    index1 = 0;
  }
  console.log(key);
}

//Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

let index;
for (let key in info){
  if (index == null){ 
    console.log('')
    index = 0;
  }
    console.log(info[key]);
  
    
}

//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christimas on Bear Mountain, Dell´s Four Color Comics #178',
  nota: 'O último MacPatrinhas',
  recorrente: 'Sim',
};
console.log('');
console.log(info.personagem + ' e ' + info2.personagem);
console.log(info.origem + ' e ' + info2.origem);
console.log(info.nota + ' e ' + info2.nota);
console.log('Ambos  ' + info2.recorrente);
 
console.log('');
for (let concat in info) {
  if (
    concat === 'recorrente' &&
    info[concat] === 'Sim' &&
    info2[concat] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[concat] + ' e ' + info2[concat]);
  }
}


  //Margarida e Tio Patinhas
//Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
//Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
//Ambos recorrentes // Atenção para essa última linha!
