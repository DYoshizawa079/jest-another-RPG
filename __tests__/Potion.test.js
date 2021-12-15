const Potion = require('../lib/Potion.js');

jest.mock('../lib/Potion');

console.log(new Potion());

test('creates a health potion object', () => {
    const potion = new Potion('health');
  
    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
  });