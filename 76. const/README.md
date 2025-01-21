Let's break down this code and explain what's happening:

```javascript
function func() {
  const a = b = c = 1
}
func()
console.log(typeof a, typeof b, typeof c)
```

This code demonstrates a tricky aspect of variable declaration and scope in JavaScript. Here's what happens step by step:

1. The line `const a = b = c = 1` is processed from right to left. It's equivalent to:
   ```javascript
   c = 1
   b = c
   const a = b
   ```

2. Because `b` and `c` are not declared with `var`, `let`, or `const`, they become global variables automatically (if not in strict mode). This is called implicit global declaration.

3. Meanwhile, `a` is properly declared with `const` but only within the function scope.

4. When `console.log(typeof a, typeof b, typeof c)` runs, here's what happens:
   - `typeof a` returns `"undefined"` because `a` was only defined inside the function scope
   - `typeof b` returns `"number"` because `b` became a global variable with value 1
   - `typeof c` returns `"number"` because `c` became a global variable with value 1

This is considered a bad practice because:
- It creates global variables unintentionally
- It makes code harder to understand and maintain
- It can lead to naming conflicts
- It wouldn't work in strict mode (would throw a ReferenceError)

The correct way to write this code would be:

```javascript
function func() {
  const a = 1;
  const b = 1;
  const c = 1;
}
```