const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const arr = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('')
  .map(Number);

arr.sort((a, b) => b - a);
console.log(arr.join(''));
