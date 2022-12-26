const { format } = require('path');

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
let [N, roads, oils] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
roads = roads
  .trim()
  .split(' ')
  .map((ele) => BigInt(ele));
oils = oils
  .trim()
  .split(' ')
  .map((ele) => BigInt(ele));

let cheapest = oils[0];
let sum = 0n;
let res = 0n;
for (let i = 0; i < roads.length; i++) {
  sum += roads[i];
  if (i === roads.length - 1) {
    res += cheapest * sum;
    break;
  }
  if (oils[i + 1] < cheapest) {
    res += cheapest * sum;
    cheapest = oils[i + 1];
    sum = 0n;
  }
}
console.log(String(res));
