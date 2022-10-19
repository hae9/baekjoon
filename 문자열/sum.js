const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const N = input[0];
const res = input[1].split('');
console.log(res);

console.log(res.reduce((pre, cur) => Number(pre) + Number(cur), 0));
