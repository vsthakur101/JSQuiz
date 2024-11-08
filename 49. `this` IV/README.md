# JavaScript `this` Context Explanation

## Code
```javascript
var bar = 1

function foo() {
  return this.bar++
}

const a = {
  bar: 10,
  foo1: foo,
  foo2: function() {
    return foo()
  },
} 

console.log(a.foo1.call())
console.log(a.foo1())
console.log(a.foo2.call())
console.log(a.foo2())
```

## Execution Explanation

### Variable and Function Setup
1. `var bar = 1`: Declares a global variable `bar` with value `1`
2. `function foo()`: Defines a function that increments and returns `this.bar`
3. Object `a` is created with three properties:
   * `bar: 10`
   * `foo1`: Reference to global `foo` function
   * `foo2`: Function that calls global `foo` function

### Method Calls
1. `a.foo1.call()`:
   * `.call()` without arguments sets `this` to global object
   * Returns global `bar` (1) and increments it to 2

2. `a.foo1()`:
   * Normal method call, `this` is bound to object `a`
   * Returns object's `bar` (10) and increments it to 11

3. `a.foo2.call()`:
   * `.call()` affects `foo2`'s `this`, but inner `foo()` call is still regular function call
   * Regular function calls in non-strict mode bind to global object
   * Returns global `bar` (2) and increments it to 3

4. `a.foo2()`:
   * Regular function call inside `foo2` binds to global object
   * Returns global `bar` (3) and increments it to 4

## Output
```
1
10
2
3
```

## Key Points
1. Regular function calls (`foo()`) in non-strict mode bind `this` to global object
2. Method calls (obj.method()) bind `this` to the object
3. `.call()` without arguments binds `this` to global object
4. Inner function calls don't inherit the outer function's `this` context