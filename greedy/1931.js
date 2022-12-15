const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
let [N, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const meetings = arr
  .map((meeting) => meeting.split(' ').map(Number))
  .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

let cnt = 1;
let endTime = meetings[0][1];
for (let i = 1; i < N; i++) {
  let start = meetings[i][0];
  if (start >= endTime) {
    endTime = meetings[i][1];
    cnt++;
  }
}
console.log(cnt);
