const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

console.log(input);
let i;
for (i = 0; i < input.length; i++) {
  i += Number(input[i]);
  console.log(i);
}
