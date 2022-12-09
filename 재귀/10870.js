const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
let input = Number(require('fs').readFileSync(filePath).toString().trim());

function F(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return F(n - 1) + F(n - 2);
}

console.log(F(input));
