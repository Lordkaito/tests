const capitalize = require('./capitalize')

it('capitalizes first letter', () => {
  expect(capitalize('hello')).toBe('Hello')
})