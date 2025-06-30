const symbol = Symbol('WEB')

const a = {
  [symbol]: 'WEB',
  BFE: 'WEB'
}

console.log(symbol in a)
console.log('WEB' in a)
console.log(Object.keys(a).length)