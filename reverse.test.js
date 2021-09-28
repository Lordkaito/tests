const reverse = require('./reverse');

it('reverse', () => {
  expect(reverse('hello')).toBe('olleh');
  expect(reverse('Hello my name is Jhon')).toBe('nohJ si eman ym olleH');
})