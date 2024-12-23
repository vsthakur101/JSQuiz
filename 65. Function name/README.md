# JavaScript Named Function Expression Explanation

## Code
```javascript
var foo = function bar(){ 
  return 'BFE'; 
};

console.log(foo());
console.log(bar());
```

## Output
```
'BFE'
ReferenceError: bar is not defined
```

## Explanation

### Function Expression Analysis
1. `var foo` declares variable `foo`
2. Function expression with name `bar` is assigned to `foo`
3. Name `bar` is only accessible within function scope
4. Outside function scope, only `foo` is accessible

### Execution
1. `foo()`:
   * Function is called through `foo` reference
   * Returns `'BFE'`

2. `bar()`:
   * Tries to access function through `bar` name
   * `bar` is not defined in outer scope
   * Throws `ReferenceError`

## Key Points
1. Named function expressions create named reference only in their own scope
2. Outside reference is only available through assigned variable
3. Function name can be useful for recursion within function
4. Named function expressions provide better stack traces for debugging