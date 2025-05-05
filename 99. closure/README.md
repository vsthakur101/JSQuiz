
---

# 🔍 JavaScript Closure & Variable Shadowing

```javascript
let dev = 'web'

function a() {
  let dev = 'DEV'
  return function() {
    console.log(dev)
  }
}

dev = 'webdev'

a()()
```

---

## 🧠 Step-by-Step Breakdown

### ✅ Step 1: Declare Global Variable

```js
let dev = 'web'
```

* Global `dev` is initialized with `'web'`.

---

### ✅ Step 2: Declare Function `a()`

```js
function a() {
  let dev = 'DEV'
  return function() {
    console.log(dev)
  }
}
```

* Inside `a()`, a **new local variable** `dev = 'DEV'` is declared.
* It **shadows** the global `dev`.
* `a()` returns an inner function that **closes over** this `dev`.

---

### ✅ Step 3: Reassign Global `dev`

```js
dev = 'webdev'
```

* This updates the **global** variable.
* But it has **no impact** on the `dev` inside `a()`.

---

### ✅ Step 4: Execute `a()()`

```js
a()()
```

* `a()` returns the inner function.
* That inner function logs `dev`, which refers to `'DEV'` (from its closure).
* So it prints:

```text
DEV
```

---

## ✅ Final Output:

```text
DEV
```

---

## 🔁 Key Concepts

| Concept            | Explanation                                                  |
| ------------------ | ------------------------------------------------------------ |
| Closure            | The returned function "remembers" `dev = 'DEV'` inside `a()` |
| Variable Shadowing | Local `dev` in `a()` hides the global `dev`                  |

---
