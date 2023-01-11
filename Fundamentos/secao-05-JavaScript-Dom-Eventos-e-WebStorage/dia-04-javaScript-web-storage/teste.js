
const generateCells = () => {
    const span = document.querySelector('.matriz');
    for (let index = 0; index < 5; index += 1) {
        const line = document.createElement('div');
        line.className = 'line';
        span.appendChild(line);
        for (let index1 = 0; index1 < 5; index1 += 1) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            line.appendChild(cell);
        }
    }
}
generateCells();






