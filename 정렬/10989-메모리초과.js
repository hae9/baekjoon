const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [n, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

arr.sort((a, b) => a - b);
console.log(arr.join('\n'));
