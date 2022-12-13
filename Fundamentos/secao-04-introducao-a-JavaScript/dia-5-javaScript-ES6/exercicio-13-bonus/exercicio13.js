
function substituaX(nome){
    const frase = 'Tryber x aqui!';
    const fraseAlt = frase.replace('x', nome);
     
}
function minhasSkills(funcao){
    const func = funcao;
    const skills = ['javaScript', 'HTML','gitHub'];
    let resultado = `${func}

    Minhas três principais habilidades são: `;
    return resultado;
}
//console.log(minhasSkills(substituaX('Charles')));
console.log(minhasSkills(substituaX('Charles')));