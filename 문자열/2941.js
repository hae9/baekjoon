const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();
const croat = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

function sol(input) {
  for (i = 0; i < croat.length; i++) {
    while (input !== input.replace(croat[i], ''))
      input = input.replace(croat[i], ' ');
  }
  return input.length;
}

console.log(sol(input));
