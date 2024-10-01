## Step-by-Step Execution

1. **Expression: `var a = 1`**
   - The variable `a` is declared and initialized with the value `1` in the global scope.
   - No output.

2. **Expression: `function func() { a = 2; console.log(a); var a }`**
   - The function `func` is declared but not executed yet.
   - No output.

3. **Expression: `func()`**
   - The `func` function is called. Inside the function, due to **hoisting**, `var a` is hoisted to the top of the function's scope, but it is not initialized yet. So initially, the local `a` is `undefined`.

   Steps inside `func`:
   - **Hoisting:** `var a` is hoisted, so the local `a` is `undefined` at first.
   - `a = 2`: The local `a` (which is `undefined` due to hoisting) is assigned the value `2`. The global `a` remains unaffected.
   - `console.log(a)` logs the local `a`, which is `2`.
   - Output: `2` (inside the `func` function).

4. **Expression: `console.log(a)`**
   - After the `func` function call, the global `a` is logged.
   - Since the `func` did not modify the global `a`, the global `a` still holds the value `1`.
   - Output: `1`

5. **Expression: `if (!('b' in window)) { var b = 1 }`**
   - The `if` condition checks if the property `b` exists in the `window` object.
   - **Hoisting:** The variable `b` is declared globally (due to `var b`), but not initialized yet. So `b` is `undefined` at this point.
   - Since `b` exists but is `undefined`, the condition `'b' in window` returns `true`, and the block inside the `if` does **not** execute. Therefore, `b = 1` does **not** happen.
   - No output for this step.

6. **Expression: `console.log(b)`**
   - Since `b` is hoisted but not assigned any value, it remains `undefined`.
   - Output: `undefined`
