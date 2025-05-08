
---

# 🔍 `this` Behavior in Global Scope (Non-Strict Mode)

```javascript
var a = 'WEB'
let b = 'WEBDEV'
console.log(this.a) 
console.log(this.b)
```

---

## 🧠 Step-by-Step Breakdown

### ✅ Step 1: Declare Global Variables

```javascript
var a = 'WEB'
let b = 'WEBDEV'
```

* `var a` declares a global variable and **attaches it to the global object** (`window` in browsers, `global` in Node).
* `let b` also declares a global variable, but **does NOT attach it to the global object**.

---

### ✅ Step 2: Access with `this`

```javascript
console.log(this.a) // → 'WEB'
console.log(this.b) // → undefined
```

* `this` in the global scope (in non-strict mode) refers to the **global object**.
* So:

  * `this.a` → `'WEB'` ✅
  * `this.b` → `undefined` ❌ (because `b` is not a property of the global object)

---

## 📝 Final Output

```text
WEB
undefined
```

---

## 🔁 Summary Table

| Declaration | Attached to `this`? | Value via `this` |
| ----------- | ------------------- | ---------------- |
| `var a`     | ✅ Yes               | `'WEB'`          |
| `let b`     | ❌ No                | `undefined`      |

---