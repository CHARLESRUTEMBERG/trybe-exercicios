

const sum = require('./sum');

test('Verifica se a soma de 2 e 3 é 5', () => {
  expect(sum(2, 3)).toEqual(5);
});

test('Verifica se a soma de 5 e 5 é 10', () => {
    expect(sum(5, 5)).toEqual(10);
});