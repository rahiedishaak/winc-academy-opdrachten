const wordLengths = require("./wordlengths.js");

test('Get word lengths', () => {
  const words = ['sun', 'potato', 'roundabout', 'pizza'];
  const expected = [3, 6, 10, 5];
  const output = wordLengths(words);

  expect(output).toEqual(expected);
});