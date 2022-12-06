const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let cnt = 0;
for (i = 1; i < input.length; i++) {
  const word = input[i].trim();
  let stack = [];
  for (let j = 0; j < word.length; j++) {
    if (stack[stack.length - 1] !== word[j]) {
      stack.push(word[j]);
    }
  }
  const set = new Set();
  stack.map((e) => set.add(e));
  if (set.size === stack.length) cnt++;
}
console.log(cnt);
