const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const N = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('')
  .map(Number);

let answer = -1;
if (N.includes(0) && N.reduce((a, b) => a + b, 0) % 3 === 0) {
  N.sort((a, b) => b - a);
  answer = N.join('');
}
console.log(answer);
