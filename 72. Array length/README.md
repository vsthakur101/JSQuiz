# JavaScript Array Length and Class Extension Explanation

## Code
```javascript
class MyArray extends Array {
  get length() {
    return 3
  }
}

const arr1 = new MyArray(10)
console.log(arr1.length)

const arr2 = new Array(10)
console.log(arr2.length)
```

## Output
```
10
10
```

## Explanation

### Class MyArray
* Extends built-in Array class
* Attempts to override `length` with getter
* Getter would always return `3`

### Behavior Analysis
1. `new MyArray(10)`:
   * Creates array with length `10`
   * Custom `length` getter is ignored
   * Built-in length behavior preserved

2. `new Array(10)`:
   * Creates regular array with length `10`
   * Works as expected

## Key Points
1. Built-in Array `length` property cannot be overridden
2. Array `length` is a special property with internal implementation
3. Getter for `length` is ignored in Array subclass
4. `length` maintains native behavior in both cases