const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const [A, B] = input.map((n) => n.split('').reverse().join(''));
console.log(Math.max(A, B));
