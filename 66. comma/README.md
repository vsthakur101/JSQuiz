# JavaScript Function Grouping and Last Value Expression

## Code
```javascript
var obj = {
  a: "BFE",
  b: "dev",
  func: (function foo(){ return this.a; }, function bar(){ return this.b; })
}

console.log(obj.func())
```

## Output
```
'dev'
```

## Explanation

### Object Structure
1. Property `a` is `"BFE"`
2. Property `b` is `"dev"`
3. Property `func` is assigned result of grouped expression

### Expression Analysis
* Grouping operator `(...)` evaluates all expressions
* Returns the last value (function `bar`)
* `obj.func` references the second function (`bar`)

### Execution
1. `obj.func()`:
   * Calls `bar` function with `obj` as context
   * `this` points to `obj`
   * Returns `obj.b` which is `"dev"`

## Key Points
1. Comma operator evaluates expressions left to right
2. Returns the value of last expression
3. Function `foo` is never used
4. Only `bar` function is stored in `obj.func`
5. When called, `this` context is set to `obj`