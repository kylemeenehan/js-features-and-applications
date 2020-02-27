/* eslint eqeqeq: "off", valid-typeof: "off" */

function expect(value) {
  return {
    toBeLoosely: (expected) => value == expected,
    toBeStrictly: (expected) => value === expected,
    toHaveConstructor: (expected) => value.constructor === expected,
    toBeOfType: (expected) => typeof value === expected,
  };
}

console.log(`
  ${expect(1).toBeLoosely('1')}
  ${expect(1).toBeStrictly('1')}
  ${expect(1).toHaveConstructor(Number)}
  ${expect(1).toBeOfType('number')}
`);
