# Sparse Array Behavior in JavaScript

## Code
```javascript
const arr = [1,,,2]

// forEach
arr.forEach(i => console.log(i))

// map
console.log(arr.map(i => i * 2))

// for ... of
for (const i of arr) {
  console.log(i)
}
```

## Output
```
1
2

[2, <1 empty item>, 4]

1
2
```

## Explanation
1. `forEach`:
   - Skips empty slots in sparse arrays
   - Only logs defined elements (1 and 2)

2. `map()`:
   - Preserves empty slots
   - Returns array with same structure as original
   - Multiplies defined elements
   - Keeps empty slot in its original position

3. `for...of`:
   - Iterates through all elements, including empty slots
   - Treats empty slots as `undefined`
   - Logs 1 and 2

## Key Points
- Different iteration methods handle sparse arrays differently
- Empty slots are not the same as `undefined`
- `forEach` and `map` have special handling for sparse arrays