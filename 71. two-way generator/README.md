# JavaScript Generator Function Explanation

## Code
```javascript
function* gen() {
  yield 2 * (yield 100)
}

const generator = gen()
console.log(generator.next().value)
console.log(generator.next(1).value)
console.log(generator.next(1).value)
```

## Output
```
100
2
undefined
```

## Explanation

### First Call: `generator.next().value`
* Generator starts execution
* Encounters first `yield 100`
* Pauses and returns `100`

### Second Call: `generator.next(1).value`
* Resumes execution with `1` replacing first `yield 100`
* Expression becomes `2 * 1`
* Encounters second `yield` with value `2`
* Pauses and returns `2`

### Third Call: `generator.next(1).value`
* Resumes execution
* No more code to execute
* Returns `undefined`

## Key Points
1. `next()` returns object with `value` property
2. First `next()` ignores passed value
3. Subsequent `next(value)` replaces previous `yield` with passed value
4. Generator function returns `undefined` when done