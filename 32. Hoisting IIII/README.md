## Step-by-Step Execution

### 1. **Declaration: `var a = 1` and `function a() {}`**
- JavaScript hoists function declarations above variable declarations.
- `function a()` is hoisted first.
- `var a = 1` is declared, but assignment happens after hoisting.
- After hoisting, `a` is set to `1`.
- **First console log**: `typeof a` is `'number'`.
- **Result**: `'number'`

### 2. **Declaration: `var b` and `function b() {}`**
- Function `b` is hoisted first.
- After hoisting, `b` becomes a function.
- Then `b = 1` assigns `b` to `1`.
- **Second console log**: `typeof b` is `'number'` (because `b` is now assigned the value `1`).
- **Result**: `'number'`

### 3. **Declaration: `function c() {}` and `var c = 1`**
- The function `c()` is hoisted first.
- Then, `var c = 1` is declared, which reassigns `c` to `1`.
- **Third console log**: `typeof c` is `'number'` (because `c` has been reassigned to `1`).
- **Result**: `'number'`

### 4. **Immediately Invoked Function Expression (IIFE) with `var d = 1`**
- `d = 1` declares `d` and assigns it to `1` outside the IIFE.
- Inside the IIFE:
  - Function `d()` is hoisted, so within the IIFE `d` is a function.
  - `d = '2'` tries to reassign `d` inside the IIFE.
  - However, since `d` refers to the function, `typeof d` is `'function'` inside the IIFE.
  - After the assignment, `d` is now `'2'`.
- **Fourth console log**: `typeof d` inside the IIFE is `'string'` (because `d` has been reassigned to `'2'`).
- Outside the IIFE, `d` remains as `1`.
- **Fifth console log**: `typeof d` is `'number'` because `d` was not affected by the IIFE hoisting.
- **Results**: `'string'` inside the IIFE and `'number'` outside the IIFE.

### 5. **Declaration: `var e = 1` and `const f = function e() {}`**
- `var e = 1` declares `e` as `1`.
- The function expression `function e()` creates a locally scoped function named `e` inside `f`, but it does not affect the outer `e`.
- **Sixth console log**: `typeof e` is `'number'` (since the outer `e` is still `1`).
- **Result**: `'number'`

## Final Output:
```js
'number'
'number'
'number'
'string'
'number'
'number'
