# JavaScript `in` Operator Type Coercion Explanation

## Code
```javascript
const obj = {
  foo: 'bar'
}

console.log('foo' in obj)
console.log(['foo'] in obj)
```

## Output
```
true
true
```

## Explanation

### First Case: `'foo' in obj`
* String `'foo'` is used directly as property name
* `in` operator checks if property exists in object
* `'foo'` exists in `obj`, returns `true`

### Second Case: `['foo'] in obj`
* Array `['foo']` is converted to string via `toString()`
* `['foo'].toString()` returns `'foo'`
* `'foo' in obj` is effectively executed
* Property exists, returns `true`

## Key Points
1. `in` operator coerces the left operand to string
2. Arrays are converted to string using `toString()`
3. Both checks result in looking for property `'foo'`