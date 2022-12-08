const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const arr = [];
for (let i = 1; i < input.length; i++) {
  const [x, y] = input[i].trim().split(' ').map(Number);
  arr.push([x, y]);
}
arr.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
console.log(arr.join('\n').replace(/,/g, ' ').trim());
