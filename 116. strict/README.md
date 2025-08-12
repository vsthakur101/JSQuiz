
---

# Understanding JavaScript Strict Mode Behavior in the `a()` Function

## Overview

This snippet demonstrates how **JavaScript strict mode** changes variable assignment rules and leads to a **runtime error** when assigning to an undeclared variable.

```javascript
function a() {
  'use strict'
  dev = 'WEB'
  console.log(dev)
}

a()
```

---

## Step-by-Step Execution

### 1. Function Declaration

```javascript
function a() { ... }
```

* A function named **`a`** is defined.
* The code inside the function will not run until the function is explicitly called.

---

### 2. Function Invocation

```javascript
a()
```

* Execution enters the body of the `a()` function.

---

### 3. Enabling Strict Mode

```javascript
'use strict'
```

* **Strict mode** is enabled **only within the function's scope** (because the directive is inside the function, not globally).
* Strict mode:

  * Prevents the creation of **implicit global variables**.
  * Throws errors for assignments to undeclared variables.
  * Disallows certain reserved words and syntax quirks.

---

### 4. Attempting Assignment to an Undeclared Variable

```javascript
dev = 'WEB'
```

* **In non-strict mode**:
  JavaScript would **implicitly create a global variable** named `dev` and assign the value `'WEB'`.

* **In strict mode**:
  Assigning to a variable that hasn’t been declared with `var`, `let`, or `const` **throws a `ReferenceError`** instead of silently creating a global.

* At this step, the interpreter **stops execution** and throws:

  ```
  ReferenceError: dev is not defined
  ```

---

### 5. Console Logging

```javascript
console.log(dev)
```

* **This line is never reached** because execution halts at step 4 due to the `ReferenceError`.

---

## Final Output

When run, the snippet produces:

```
ReferenceError: dev is not defined
```

No other output is printed.

---

## Key Takeaways

* **Strict mode** enforces better coding practices and helps avoid accidental global variable creation.
* Always declare variables using `let`, `const`, or `var` in strict mode.
* To fix this snippet, declare `dev` explicitly:

```javascript
function a() {
  'use strict'
  let dev = 'WEB'
  console.log(dev)
}

a()
// Output: WEB
```

---

✅ **Lesson:**
If you see `ReferenceError: <variable> is not defined` in strict mode, check whether you forgot to declare it.

---