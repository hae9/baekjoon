const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const num = Number(require('fs').readFileSync(filePath).toString().trim());

const line = [];
console.log(printStarts(num));

function printStarts(num) {
  for (i = 0; i < num; i++) {
    for (j = 0; j < num; j++) {
      star(i, j, num);
    }
    line.push('\n');
  }
  return line.join('');
}
function star(i, j, num) {
  if (i % 3 === 1 && j % 3 === 1) {
    line.push(' ');
  } else {
    if (num === 1) {
      line.push('*');
    } else {
      star(parseInt(i / 3), parseInt(j / 3), parseInt(num / 3));
    }
  }
}
