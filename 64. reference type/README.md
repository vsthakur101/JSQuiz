# JavaScript Method Invocation and `this` Context

## Code
```javascript
const obj = {
  msg: 'BFE',
  foo() {
    console.log(this.msg)
  },
  bar() {
    console.log('dev')
  }
}

obj.foo();
(obj.foo)();
(obj.foo || obj.bar)();
```

## Output
```
BFE
BFE
undefined
```

## Explanation

### First Call: `obj.foo()`
* Regular method call
* `this` is bound to `obj`
* Outputs `'BFE'`

### Second Call: `(obj.foo)()`
* Grouping operator `()` doesn't affect context
* Still a method call
* `this` remains bound to `obj`
* Outputs `'BFE'`

### Third Call: `(obj.foo || obj.bar)()`
* Logical OR returns `obj.foo` function reference
* Function is called without context
* `this` becomes `undefined` (or `window` in non-strict mode)
* Outputs `undefined`

## Key Points
1. Method calls retain `this` context
2. Grouping operator preserves context
3. Logical operators break method context
4. Context is lost when method is called through reference