function Person(idNumber, name, creditCardNumber) {
  this.idNumber = idNumber;
  this.name = name;
  this.creditCardNumber = creditCardNumber;

  this.print = () => {
    console.log(`
      ${this.name}
      ${this.idNumber}
      ${this.creditCardNumber}
    `);
  };

  return new Proxy(this, {
    set: (target, prop, value) => {
      switch (prop) {
        case 'idNumber':
          break; // idNumber cannot be changed
        case 'name':
          if (typeof value === 'string') { // Name can only be a string
            this.name = value;
          }
          break;
        case 'creditCardNumber':
          if (this.creditCardExpired) {
            this.creditCardNumber = value;
            this.creditCardExpired = false;
          }
          break;
        case 'creditCardExpired':
          // credit card expired cannot be set to false
          this.creditCardExpired = value || this.creditCardExpired;
          break;
        default:
      }
    },
  });
}

const bob = new Person(1234, 'Bob Jones', 1234123456785678);

bob.print();

bob.name = 123;
bob.idNumber = 123;
bob.creditCardNumber = 123;

bob.print();

bob.creditCardExpired = true;
console.log(`creditCardExpired: ${bob.creditCardExpired}`);

bob.creditCardExpired = false;
console.log(`creditCardExpired: ${bob.creditCardExpired}`);

bob.creditCardNumber = 1234;
console.log(`creditCardNumber: ${bob.creditCardNumber}`);
console.log(`creditCardExpired: ${bob.creditCardExpired}`);
