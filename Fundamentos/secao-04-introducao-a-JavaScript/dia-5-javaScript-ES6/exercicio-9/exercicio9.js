
let status = 'desligado';
const ligaEDesliga = () => {
    if (status === 'desligado') {
        return status = 'ligado';
    } else {
        return status = 'desligado';
    }
}
console.log(`O motor está ${ligaEDesliga()}`);
console.log(`O motor está ${ligaEDesliga()}`);
console.log(`O motor está ${ligaEDesliga()}`);

