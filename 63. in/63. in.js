const obj = {
  foo: 'bar'
}

console.log('foo' in obj)
console.log(['foo'] in obj) // obj['foo']

// true, true