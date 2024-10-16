## Step-by-Step Execution of JavaScript Function `foo`

### 1. **Global Scope**
   - No variables are declared in the global scope before the function `foo()` is called.

### 2. **Execution of `foo()`**
   - **Code**:
     ```javascript
     function foo() {
       console.log(i)
       for (var i = 0; i < 3; i++) {
         console.log(i)
       }
     }

     foo();
     ```
   - **Step 1**: When `foo()` is called, the first statement inside the function is `console.log(i)`.
   - **Step 2**: The `var i` declaration inside the `for` loop is **hoisted** to the top of the function scope. This means `i` is declared at the top of the function with an initial value of `undefined`, but the initialization (`i = 0`) hasn't occurred yet.
   - **Step 3**: At the time of `console.log(i)`, the variable `i` is `undefined` because only the declaration has been hoisted, not its initialization.
   - **Step 4**: `console.log(i)` logs `undefined`.
   - **Step 5**: The `for` loop starts, and `i` is initialized with `0`.
   - **Step 6**: In each iteration of the loop:
     - Iteration 1: `console.log(i)` logs `0`.
     - Iteration 2: `console.log(i)` logs `1`.
     - Iteration 3: `console.log(i)` logs `2`.
   - **Step 7**: After the third iteration, the loop ends when `i` becomes `3`, exiting the loop.

---

## Final Output in Order:
```text
undefined
0
1
2
