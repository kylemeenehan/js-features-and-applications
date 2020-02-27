function Person(idNumber, name, creditCardNumber) {
  this.idNumber = idNumber;
  this.name = name;
  this.creditCardNumber = creditCardNumber;

  return new Proxy(this, {
    get: (target, prop) => {
      if (prop === 'creditCardNumber') {
        return `**** **** **** ${this.creditCardNumber.toString().slice(-4)}`;
      }
      return this[prop];
    },
  });
}

const bob = new Person(1234, 'Bob Jones', 1234123456785678);

console.log(`
  ${bob.name}
  ${bob.idNumber}
  ${bob.creditCardNumber}
`);
