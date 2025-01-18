You're correct, let me provide the accurate explanation.

# JavaScript IIFE, Hoisting, and Global Object Properties Explanation

## Code
```javascript
var a = 1;
(function() {
  console.log(a + this.a);
  var a = '2'
  console.log(a + this.a);
})();

var name = 1;
(function() {
  console.log(name + this.name);
  var name = '2'
  console.log(name + this.name);
})();
```

## Output
```
NaN
2undefined
NaN
2undefined
```

## Explanation

### First IIFE with 'a'
1. First `console.log(a + this.a)`:
   * Local `a` is hoisted but undefined
   * `this.a` is `undefined`
   * `undefined + undefined` = `NaN`

2. Second `console.log(a + this.a)`:
   * Local `a` is `'2'` (string)
   * `this.a` is still `undefined`
   * `'2' + undefined` = `'2undefined'`

### Second IIFE with 'name'
1. First `console.log(name + this.name)`:
   * Local `name` is hoisted but undefined
   * `this.name` is `undefined`
   * `undefined + undefined` = `NaN`

2. Second `console.log(name + this.name)`:
   * Local `name` is `'2'` (string)
   * `this.name` is still `undefined`
   * `'2' + undefined` = `'2undefined'`

## Key Points
1. Variable declarations are hoisted
2. `var` declarations don't create properties on global object when inside functions
3. `this` inside IIFE doesn't reference global variables declared with `var`
4. String concatenation with `undefined` produces 'stringundefined'