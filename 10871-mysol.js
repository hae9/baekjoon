const input = require('fs').readFileSync('input.txt').toString().split('\n');
const arr1 = input[0].split(' ');
const arr2 = input[1].split(' ');
const N = arr1[0];
const X = arr1[1];
let answer = '';

for(i=0; i<N; i++){
  if (Number(arr2[i]) < X) {
    answer += Number(arr2[i])+' '
  }
}
console.log(answer.trim());