const sum = require('./script');

test('проверка: 1 + 2 должно быть 3', () => {
    expect(sum(1, 2)).toBe(10);
});