const input = require('fs').readFileSync('input.txt').toString();
let star = '';
let result = '';

// 2438번
for (i=1; i<=input; i++) {
  star += '*';
  console.log(star);
}

// 2439번
for (i=1; i<=input; i++) { // i 1 2
  let space = '';
  for (j=1; j<=(input-i); j++){ // j 1 2 3 4 1 2
    space += ' ';
  }
  star += '*';
  console.log(space + star);
}

// console.log(result);
