# JavaScript Function Declarations in Blocks and Hoisting

## Code
```javascript
if (true) {
  function foo() {
    console.log('Web')
  }
}
if (false) {
  function bar() {
    console.log('dev')
  }
}

foo()
bar()
```

## Output
```
'Web'
ReferenceError: bar is not defined
```

## Explanation

### Function `foo`
* Declared inside `if (true)` block
* Block executes
* Function is created and accessible outside block
* Can be called after declaration

### Function `bar`
* Declared inside `if (false)` block
* Block never executes
* Function is not created
* Reference causes `ReferenceError`

### Browser Behavior
Function declarations in blocks (`if`, `for`, etc.):
* Have block scope in strict mode
* Have function scope in non-strict mode
* Behavior can vary between browsers

## Key Points
1. Function declarations in blocks are hoisted
2. Functions in unexecuted blocks are not created
3. Best practice: Avoid function declarations in blocks
4. Use function expressions instead for consistent behavior