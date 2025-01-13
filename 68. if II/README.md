# JSQuiz: If Statement II

This repository contains a JavaScript quiz question that tests your understanding of function expressions and the `if` statement.

## Code Explanation

```javascript
if (function foo(){ console.log('WEB') }) {
    console.log('dev')
}
foo()
```

### What the Code Does

1. The `if` statement contains a function expression `function foo(){ console.log('WEB') }`.
2. In JavaScript, function expressions are evaluated to the function object itself, which is truthy.
3. Therefore, the `if` block will always execute, logging `dev` to the console.
4. The call to `foo()` outside the `if` block will result in a `ReferenceError` because `foo` is not defined in the global scope.

### Output

```
dev
ReferenceError: foo is not defined
```

### Key Points

- Function expressions inside `if` statements are evaluated but not hoisted.
- The function `foo` is not accessible outside the `if` block.

## Conclusion

This code snippet demonstrates the behavior of function expressions within `if` statements and highlights the scope of function declarations in JavaScript.
