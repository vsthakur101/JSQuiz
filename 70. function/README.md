# JavaScript Function and Variable Declaration Hoisting

## Code
```javascript
function foo(){ console.log(1) }
var foo = 2
function foo(){ console.log(3) }
foo()
```

## Output
```
TypeError: foo is not a function
```

## Explanation

### Hoisting and Execution Order
1. Function declarations are hoisted first:
   * First `foo` function declaration hoisted
   * Second `foo` function declaration hoisted (overwrites first)

2. Variable declarations are hoisted:
   * `var foo` declaration hoisted (but not the assignment)

3. Code executes:
   * Second function declaration: `foo` points to function that logs `3`
   * `var foo = 2` executes: `foo` is reassigned to number `2`
   * `foo()` attempts to call `2` as a function

### Final State
* `foo` contains value `2`
* Attempting to call `foo()` results in TypeError
* Function declarations are overwritten by number assignment

## Key Points
1. Function declarations are hoisted first
2. Multiple function declarations override each other
3. Variable assignments occur at execution time
4. Cannot call a number as a function