
---

# 📘 JavaScript Execution Breakdown: `Array.prototype.push()` and Return Value

```js
const a = [1, 2, 3]
const b = a.push(4)
const c = b.push(5) // ❌ Error
console.log(c)
```

---

## 🔍 Step-by-Step Execution

### ✅ Line 1: `const a = [1, 2, 3]`

* Creates an array `a` with initial values `[1, 2, 3]`.

---

### ✅ Line 2: `const b = a.push(4)`

* `a.push(4)` adds `4` to the end of the array → `a = [1, 2, 3, 4]`.
* `.push()` returns the **new length** of the array, **not** the array itself.
* So:

  ```js
  b = 4
  ```

---

### ❌ Line 3: `const c = b.push(5)`

* `b` is a **number** (`4`), **not an array**.
* Numbers don’t have a `.push()` method.
* This results in a **TypeError**:

```txt
Uncaught TypeError: b.push is not a function
```

---

### 🚫 Line 4: `console.log(c)`

* This line is **never reached** due to the runtime error above.

---

## 🧪 Actual Output

```txt
❌ TypeError: b.push is not a function
```

---

## 🔎 Summary: `.push()` Behavior

| Code                | Description                                | Returns             |
| ------------------- | ------------------------------------------ | ------------------- |
| `arr.push(item)`    | Adds `item` to end of `arr`                | New length (Number) |
| `let b = a.push(4)` | `b` becomes the new length (`4`)           | Not an array        |
| `b.push(5)`         | ❌ Invalid — `.push()` only works on arrays | Throws error        |

---

## ✅ Correct Usage

If you want to keep pushing and chaining, you need to stay with the array:

```js
const a = [1, 2, 3]
a.push(4)         // a = [1, 2, 3, 4]
a.push(5)         // a = [1, 2, 3, 4, 5]
console.log(a)    // [1, 2, 3, 4, 5]
```

---