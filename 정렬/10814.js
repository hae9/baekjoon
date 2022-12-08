const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
let [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const people = input.map((person) => person.trim().split(' '));
// console.log(people);
people.sort((a, b) => a[0] - b[0]);
console.log(people.join('\n').replace(/,/g, ' '));
