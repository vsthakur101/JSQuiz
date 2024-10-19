## Step-by-Step Execution of IIFE (Immediately Invoked Function Expressions) and Function Hoisting

### 1. **First IIFE and `fn()` Function**

   - **Code**:
     ```javascript
     (() => {
       if (!fn) {
         function fn() {
           console.log("2");
         }
       }
       fn();
     })();

     function fn() {
       console.log("1");
     }
     ```
   - **Step 1**: The first block is an Immediately Invoked Function Expression (IIFE), which executes immediately.
   - **Step 2**: Inside the IIFE, the `if (!fn)` condition is evaluated:
     - Functions declared using `function` are **hoisted** to the top of their scope. However, within the IIFE scope, `fn` is not yet declared (the `fn()` defined outside is not visible within this scope).
     - So, `if (!fn)` evaluates to `true`, since `fn` inside the IIFE is `undefined`.
   - **Step 3**: The inner function `fn()` (which logs `'2'`) is declared and is invoked.
   - **Step 4**: The inner `fn()` logs:
     ```text
     2
     ```

---

### 2. **Second IIFE and `fn1()` Function**

   - **Code**:
     ```javascript
     function fn1() {
       console.log("3");
     }

     (() => {
       if (!fn1) {
         function fn1() {
           console.log("4");
         }
       }
       fn1();
     })();
     ```
   - **Step 1**: The outer function `fn1()` is declared, which logs `'3'`.
   - **Step 2**: The second IIFE is executed immediately.
   - **Step 3**: Inside the IIFE, the condition `if (!fn1)` is evaluated:
     - The `fn1()` declared outside is hoisted and exists in the global scope.
     - Since `fn1` exists, the condition `if (!fn1)` evaluates to `false`, but because of **function hoisting**, the inner `fn1()` (which logs `'4'`) is still hoisted and replaces the outer one.
   - **Step 4**: The inner `fn1()` (which logs `'4'`) is invoked.
   - **Output**:
     ```text
     4
     ```

---

### 3. **Third IIFE and `fn3()` Function**

   - **Code**:
     ```javascript
     (() => {
       if (false) {
         function fn3() {
           console.log("5");
         }
       }
       fn3();
     })();
     ```
   - **Step 1**: The third IIFE is invoked immediately.
   - **Step 2**: The condition `if (false)` evaluates to `false`, so the function `fn3()` is **not** declared.
   - **Step 3**: After the `if` block, an attempt is made to invoke `fn3()`.
   - **Step 4**: Since `fn3()` was never declared (due to the false condition), this results in a **TypeError** because the engine is attempting to invoke `undefined`.
   - **Output**:
     ```text
     TypeError: fn3 is not a function
     ```

---

## Final Output in Order:
```text
2
4
TypeError: fn3 is not a function
