const invoice = {
  firstName: 'Node',
  lastName: 'Developer',
  createdAt: '2022-10-31T22:50:59.305Z',
  amount: 150,
  currency: 'USD'
};

/**
 * 1. Log firstName and lastName in dot notation and bracket notation
 */

console.log(`First name: ${invoice.firstName}`);
console.log(`Last name: ${invoice['lastName']}`);
console.log('-------------------------');

/**
 * 2. Log Object Keys
 */

const keys = Object.keys(invoice);

console.log({
  keys
});
console.log('-------------------------');

/**
 * 3. Log Object values
 */

const values = Object.values(invoice);

console.log({
  values
});
console.log('-------------------------');

/**
 * 4. Log Object entries
 */

const entries = Object.entries(invoice);

console.log({
  entries
});
console.log('-------------------------');

/**
 * 5. Create second variable invoce from original
 * Please, use more than one solution
 */

const copiedInvoice = Object.assign({}, invoice);

//  ------  Second variant  ------
// let copiedInvoice = {};
// for (const key in invoice) {
//   copiedInvoice[key] = invoice[key];
// }

console.log({
  copiedInvoice
});
console.log('-------------------------');

/**
 * 6. Modify copiedInvoice amount value
 * Important: original invoice amount shouldnt be modified
 */

copiedInvoice.amount = 300;

console.log({
  invoice,
  copiedInvoice
});
console.log('-------------------------');

/**
 * 7. Loop through object and log key-values
 */

for (const key in invoice) {
  console.log(key + '-' + invoice[key]);
}
