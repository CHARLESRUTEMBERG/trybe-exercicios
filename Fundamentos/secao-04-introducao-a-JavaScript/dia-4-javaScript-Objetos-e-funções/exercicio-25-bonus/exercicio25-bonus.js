
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
function arraynumeros(vector){
    const resultado = [];
    for (let index = 0; index < vector.length; index ++){
       // console.log(index);
        const array1 = vector[index];
        console.log(array1);
        for (let index2 = 0; index2 < array1.length; index2 ++);
        const array2 = array1[index];
        console.log(array1)
        if (array2%2 == 0){
            resultado.push(array2);
            console.log(resultado);
        }

    }
    return resultado;
}

console.log(arraynumeros(vector));
