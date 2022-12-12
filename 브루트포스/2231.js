const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = Number(require('fs').readFileSync(filePath).toString().trim());

for (let i = 1; i < input; i++) {
  const arr = i.toString().split('').map(Number);
  const sum = i + arr.reduce((a, b) => a + b, 0);
  if (sum === input) {
    return console.log(i);
  }
}
console.log(0);
