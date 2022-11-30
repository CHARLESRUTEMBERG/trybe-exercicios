

let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index]; // o -1 faz a leitura começando do ultimo elemento válido
  //console.log(reverseWord);
}

console.log(reverseWord);

for