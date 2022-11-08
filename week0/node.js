/**
 * 1. call https://jsonplaceholder.typicode.com/users and write it to file users.json
 * todo: install module to call this API, and use node FS module
 */
const fs = require('fs');
const fetch = require('cross-fetch');

switch (process.env.ENV) {
  default: {
    getFetch('https://jsonplaceholder.typicode.com/users').then(data =>
      fs.writeFile('week0/users.json', JSON.stringify(data), function (err) {
        if (err) new Error();
      })
    ).catch(err => console.log(err));
    break;
  }

  /**
 * 2. Let's work with running node script with some environment variables
 * todo: Pass parameter ENV when you run this script.
 * If param is PRODUCTION  get data from https://jsonplaceholder.typicode.com/todos and write it to file todos.json
 * If param is DEV get data from https://jsonplaceholder.typicode.com/albums and write if to file albums.json
 */

  case 'PRODUCTION': {
    getFetch('https://jsonplaceholder.typicode.com/todos').then(data =>
      fs.writeFile('week0/todos.json', JSON.stringify(data), function (err) {
        if (err) new Error();
      })
    ).catch(err => console.log(err));
    break;
  }
  case 'DEV': {
    getFetch('https://jsonplaceholder.typicode.com/albums').then(data =>
      fs.writeFile('week0/albums.json', JSON.stringify(data), function (err) {
        if (err) new Error();
      })
    ).catch(err => console.log(err));
    break;
  }
}

function getFetch (url) {
  return fetch(url).then(resp => resp.json());
}
