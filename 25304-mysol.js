const input = require('fs').readFileSync('input.txt').toString().split('\n');
const total = Number(input[0]);
const count = Number(input[1]);
let arr = [];
console.log(input);
for (i = 2; i < (count+2); i++) {
  arr.push(input[i].toString().trim().split(' '));
}
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  let num1 = Number(arr[i][0]);
  let num2 = Number(arr[i][1]);
  sum = sum + (num1 * num2) 
};

if (sum === total){
  console.log("Yes")
} else {
  console.log("No")
}