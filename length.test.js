const length = require('./length');

// Test:
it('length', () => {
  expect(length('hello')).toBe(5);
  expect(() => length(123)).toThrow('String length must be between 1 and 10');
  expect(() => length('Hello my name is Jhon')).toThrow('String length must be between 1 and 10');
})