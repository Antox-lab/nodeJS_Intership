const myArray = [1, 10, true, 3, 6, 'dfgdfgfdg', 8, {1: 'sdf', 2: 'ere'}];

/**
 * 1. Log 3 and 6 elements from myArray to console
 * Please, use more than on solution
 */

console.log(`3: ${myArray[2]}`);
console.log(`6: ${myArray[5]}`);

//  ------  Second variant  ------
// console.log(`3: ${myArray.at(2)}`);
// console.log(`6: ${myArray.at(5)}`);

//  ------  Third variant  ------
// myArray.forEach((item, index) => {
//   if (index == 2 || index == 5) {
//     console.log(`${index + 1}: ${item}`);
//   }
// })

/**
 *  2. Log type of each element
 */

myArray.forEach(item => {
  console.log(typeof item);
});

/**
 *  3. Check if all elements in array is Number
 *  Should return Boolean
 */

const isNumber = myArray.every(item => typeof item === 'number');

console.log({
  isNumber
});

/**
 * 4. Check if at least one element is bigger than 5
 * Should return Boolean
 */

const isBiggerThanFive = myArray.some(item => item > 5);

console.log({
  isBiggerThanFive
});

/**
 * 5. Create another variable that will include only elements that bigger than 5
 * Should return another Array
 */

const elementsBiggerThanFive = myArray.filter(
  item => typeof item === 'number' && item > 5
);

console.log({
  elementsBiggerThanFive
});

/**
 * 6. Multiply numbers of Array by 2
 * Should return another Array
 */

const multiplied = myArray.filter(
  item => (typeof item === 'number')
).map(item => item *2);

console.log({
  multiplied
});

/**
 * 7. Calculate array sum
 */

const sum = myArray.reduce((prev, curr) => {
  if (typeof curr !== 'number') {
    curr = 0;
  }
  return prev + curr;
});

console.log({
  sum
});

/**
 * 8. Sort array in ascending and descending order
 */

const asc = myArray.concat().filter(item => typeof item === 'number').sort((a, b) => a - b);
const desc = myArray.concat().filter(item => typeof item === 'number').sort((a, b) => b - a);

console.log({
  asc,
  desc
});
