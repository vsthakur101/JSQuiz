var a = 'a'
try {
  throw new Error('WEB.DEV')
} catch {
  var a = 'a1'
}
console.log(a) // a1

var b = 'b'
try {
  throw new Error('WEB.DEV')
} catch (b) {
  var b = 'b1'
}
console.log(b) // b

var c = 'c'
try {
  throw new Error('WEB.DEV')
} catch (error) {
  var c = 'c1'
}
console.log(c) // c1