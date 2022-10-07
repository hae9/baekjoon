const N = require('fs').readFileSync('input.txt').toString()

function plus (x) {
  let a = parseInt(x/10)
  let b = x % 10
  let c = a + b
  return(b.toString()+(c % 10).toString()) 
}

let res = plus(N)
let i = 1

while (parseInt(N) !== parseInt(res)) {
  i += 1
  res =  plus (res)

}
console.log(i)

// const c = parseInt(input/10)+input%10
// console.log((input%10).toString()+c)
// const a = ten(input)
// const b = one(input)
// let c = ten(input) + one(input)
// one(input) + c
// for(i=0; i<input.length; i++) {
//   let c = ten
//   return i
// }