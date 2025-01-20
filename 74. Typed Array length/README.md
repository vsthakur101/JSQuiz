# JavaScript TypedArray Length Property Explanation

## Code
```javascript
class MyArray extends Uint8Array {
  get length() {
    return 3
  }
}

const arr1 = new MyArray(10)
console.log(arr1.length)

const arr2 = new Uint8Array(10)
console.log(arr2.length)
```

## Output
```
3
10
```

## Explanation

### Class MyArray
* Extends `Uint8Array` (TypedArray)
* Overrides `length` with getter that returns `3`
* Length getter successfully overrides parent behavior

### Behavior Analysis
1. `new MyArray(10)`:
   * Creates TypedArray with underlying size 10
   * Custom `length` getter works
   * Returns `3` when accessing length

2. `new Uint8Array(10)`:
   * Creates regular TypedArray with length 10
   * Uses default length behavior
   * Returns actual length `10`

## Key Points
1. Unlike Array, TypedArray's `length` can be overridden
2. Custom getter takes precedence over built-in length
3. Original array size is maintained internally
4. Different behavior from regular Array inheritance