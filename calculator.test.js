const calculator = require('./calculator');

describe('Calculator', () => {
  it('should add two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  it('should subtract two numbers', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  });

  it('should multiply two numbers', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });

  it('should divide two numbers', () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });
});
