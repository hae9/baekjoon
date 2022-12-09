const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const [n, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
let cnt = 0;
function recursion(S, left, right) {
  cnt++;
  if (left >= right) return 1;
  else if (S[left] !== S[right]) return 0;
  else return recursion(S, left + 1, right - 1);
}

function isPalindrome(S) {
  return recursion(S, 0, S.length - 1);
}

for (let i = 0; i < arr.length; i++) {
  cnt = 0;
  console.log(isPalindrome(arr[i].trim()), cnt);
}
