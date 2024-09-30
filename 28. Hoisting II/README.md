## Step-by-Step Execution

1. **Expression: `const func1 = () => console.log(1)`**
   - The `func1` arrow function is declared and assigned.
   - No output.

2. **Expression: `func1()`**
   - The `func1` function is invoked, which logs `1`.
   - Output: `1`

3. **Expression: `func2()`**
   - The `func2` function is declared using a function declaration. Functions declared this way are hoisted, so they can be called before their declaration.
   - The `func2` function logs `2`.
   - Output: `2`

4. **Expression: `func3()`**
   - `func3` is declared using `var`, which is hoisted but not initialized. At this point, `func3` is `undefined`, and calling it results in a `TypeError` because you're attempting to invoke `undefined`.
   - Output: `TypeError: func3 is not a function`

5. **Expression: `var func3 = function func4() { console.log(3) }`**
   - This line assigns the function `func4` to the variable `func3`. However, this is not reached due to the error thrown by the previous `func3()` call.
   - No output.
