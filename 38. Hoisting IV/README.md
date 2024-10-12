## Step-by-Step Execution of JavaScript Functions

### 1. **Global Scope**
   - A variable `foo` is declared and initialized with the value `10`.
   - This variable is accessible globally.

### 2. **Execution of `func1`**
   - **Code**:
     ```javascript
     function func1() {
         console.log(foo);
         var foo = 1;
     }
     
     func1();
     ```
   - **Step 1**: When `func1()` is called, the first statement inside the function is `console.log(foo)`.
   - **Step 2**: Due to hoisting, the declaration `var foo` is hoisted to the top of the function scope, but not its initialization.
   - **Step 3**: At the time of the `console.log(foo)`, the local `foo` is `undefined` because it has been hoisted but not yet initialized.
   - **Step 4**: `console.log(foo)` logs `undefined`.
   - **Step 5**: After the log, `foo` is assigned the value `1`, but this occurs after the log statement.

### 3. **Execution of `func2`**
   - **Code**:
     ```javascript
     function func2() {
         console.log(foo);
         let foo = 1;
     }
     
     func2();
     ```
   - **Step 1**: When `func2()` is called, the first statement inside the function is `console.log(foo)`.
   - **Step 2**: The declaration `let foo` is also hoisted, but it is in a **temporal dead zone (TDZ)** until the line where it is defined.
   - **Step 3**: Since `let foo` has not yet been initialized when `console.log(foo)` is executed, accessing `foo` before its declaration results in a **ReferenceError**.

---

## Final Output in Order:
1. The first function (`func1`) logs:
   ```text
   undefined
