```javascript
let a = 1;
(function() {
  let foo = () => a
  let a = 2;
  console.log(foo())
}())
```

The output is `2`.

Here's the explanation:

1. The arrow function `foo` captures the block-scoped `a` from its lexical scope.

2. Even though `a` is declared with `let` after the function definition, JavaScript's lexical scoping means `foo` will use the closest `a` in its scope.

3. When `foo()` is called, it references the block-scoped `a` that is initialized to `2`.

4. Therefore, `console.log(foo())` outputs `2`.

This demonstrates how closures work with block-scoped variables, capturing the variable from their lexical environment, not just its final value.

The key points are:
- Arrow functions create closures over their lexical scope
- The `a` inside the function is the block-scoped `a`, not the global `a`
- The value of `a` when `foo` is defined is not relevant; what matters is its value when `foo` is called