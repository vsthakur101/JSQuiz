# JavaScript Code Execution Explanation

## Code
```javascript
const foo = [0]
if (foo) {
  console.log(foo == true)
} else {
  console.log(foo == false)
}
```

## Step-by-Step Execution

### 1. Array Declaration
* `const foo = [0]` creates an array containing single element `0`
* `foo` is an array object, not a primitive value

### 2. Conditional Check
* `if (foo)` evaluates array in boolean context
* Arrays (empty or non-empty) are always truthy in JavaScript
* Condition evaluates to `true`
* First block is executed

### 3. Comparison Operation
* `foo == true` performs loose equality comparison
* Type coercion occurs in following sequence:
  * Array is converted to primitive via `toPrimitive()`
  * `[0].toString()` yields `"0"`
  * `"0"` is converted to number `0`
  * `0 == true` evaluates to `false`

## Output
```
false
```

## Key Takeaway
Despite array being truthy in `if` condition, explicit comparison with `true` using `==` evaluates to `false` due to JavaScript's type coercion rules.