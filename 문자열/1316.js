const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

for (i = 1; i < input.length; i++) {
  const word = input[i].trim();
  console.log(word);
}
// const newWord = new Set(word);
