const input = require('fs').readFileSync('input.txt').toString()

function plus (x) {
  let a = parseInt(x / 10)
  let b = x % 10
  let c = a + b
  console.log(toString(b)+toString(c)) 
}
plus(26)

// const a = ten(input)
// const b = one(input)
// let c = ten(input) + one(input)
// one(input) + c
// for(i=0; i<input.length; i++) {
//   let c = ten
//   return i
// }