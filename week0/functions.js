/**
 * 1. Write a function that accepts your firstName and lastName
 * Should return 'I'm firstName lastName'
 */

function sayWho (firstName, lastName) {
  return `I'm ${firstName} ${lastName}`;
}

console.log(sayWho('Anton', 'Shvets'));
console.log('-------------------------');

/**
 * 2. Write a function that accepts numbers and return their sum
 * No limits for arguments count
 */

function countSum () {
  return Object.values(arguments).reduce((prev, curr) => prev + curr);
}

console.log(countSum(4, 5, 23));
console.log(countSum(10, 50, 212, 300, 22));
console.log(countSum(1, 2));
console.log('-------------------------');

/**
 * 3. Write a function that count number of letters in provided string
 */

function countLetters (string, letter) {
  let result = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      result++;
    }
  }
  return result;
}

console.log(countLetters('Node developer', 'd'));
console.log('-------------------------');

/**
 *  4. Write function that will return random integer in range that you provided
 */

function getRandom (start, end) {
  return Math.trunc(Math.random() * (end - start) + start);
}

console.log(getRandom(0, 10));
console.log(getRandom(90, 200));
