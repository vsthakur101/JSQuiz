# Type Conversion and Primitive Coercion Explanation

## Code
```javascript
const obj1 = {
  valueOf() {
    return 1
  },
  toString() {
    return '100'
  }
}

console.log(obj1 + 1)
console.log(parseInt(obj1))

const obj2 = {
  [Symbol.toPrimitive]() {
    return 200
  },

  valueOf() {
    return 1
  },
  toString() {
    return '100'
  }
}

console.log(obj2 + 1)
console.log(parseInt(obj2))

const obj3 = {
  toString() {
    return '100'
  }
}

console.log(+obj3)
console.log(obj3 + 1)
console.log(parseInt(obj3))

const obj4 = {
  valueOf() {
    return 1
  }
}

console.log(obj4 + 1)
console.log(parseInt(obj4))

const obj5 = {
  [Symbol.toPrimitive](hint) {
    return hint === 'string' ? '100' : 1
  },
}

console.log(obj5 + 1)
console.log(parseInt(obj5))
```

## Output
```
2
1
201
200
100
101
100
2
1
200
201
100
```

## Detailed Explanation

### Case 1 (obj1)
1. `obj1 + 1`: Uses `valueOf()` method, returns `1 + 1 = 2`
2. `parseInt(obj1)`: Uses `toString()` method, returns `100`

### Case 2 (obj2)
1. `[Symbol.toPrimitive]` has highest priority
2. `obj2 + 1`: Returns `200 + 1 = 201`
3. `parseInt(obj2)`: Returns `200`

### Case 3 (obj3)
1. No `valueOf()` method
2. `+obj3`: Uses `toString()`, converts to `100`
3. `obj3 + 1`: Converts to string, returns `'100' + 1 = '101'`
4. `parseInt(obj3)`: Returns `100`

### Case 4 (obj4)
1. Only `valueOf()` method
2. `obj4 + 1`: Returns `1 + 1 = 2`
3. `parseInt(obj4)`: Returns `1`

### Case 5 (obj5)
1. `Symbol.toPrimitive` with context-based conversion
2. `obj5 + 1`: Numeric hint, returns `1 + 1 = 2`
3. `parseInt(obj5)`: String hint, returns `100`

## Type Conversion Precedence
1. `Symbol.toPrimitive` (if defined)
2. `valueOf()` method
3. `toString()` method

## Key Points
- Type conversion depends on context (numeric or string)
- `Symbol.toPrimitive` overrides other conversion methods
- Different methods used for different operations
- Conversion strategy changes based on operation type