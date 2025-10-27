
---

# 🔍 The Code

```js
const obj = {}
const fun = () => {}

console.log(obj.toString === Object.toString)
console.log(fun.toString === Function.toString)
console.log(obj.toString === Object.prototype.toString)
console.log(fun.toString === Function.prototype.toString)
console.log(Object.toString === Object.prototype.toString)
console.log(Function.toString === Function.prototype.toString)
```

---

# 🧩 Key Background

* Every **plain object** (like `{}`) inherits from `Object.prototype`.
  So `obj.toString` refers to `Object.prototype.toString`.

* Every **function** (like `() => {}`) is an instance of `Function`.
  So `fun.toString` refers to `Function.prototype.toString`.

* `Object` and `Function` themselves are *functions* (constructor functions).

---

# ⚙️ Line-by-Line Breakdown

### 1️⃣

```js
obj.toString === Object.toString
```

* `obj.toString` → comes from `Object.prototype.toString`
* `Object.toString` → comes from the `Function.prototype.toString` (since `Object` is a function)
* So these are **not the same function**.

✅ **Result:** `false`

---

### 2️⃣

```js
fun.toString === Function.toString
```

* `fun.toString` → inherited from `Function.prototype.toString`
* `Function.toString` → again, since `Function` itself is a function, it also inherits from `Function.prototype.toString`
* But `Function.toString` is the **method itself** (`Function.prototype.toString`), not the result of calling it.

Let’s confirm:

```js
fun.toString === Function.prototype.toString // true
Function.toString === Function.prototype.toString // true
```

So both are **the same reference** to the built-in `Function.prototype.toString`.

✅ **Result:** `true`

---

### 3️⃣

```js
obj.toString === Object.prototype.toString
```

* Yes — `obj` inherits that directly from `Object.prototype`.

✅ **Result:** `true`

---

### 4️⃣

```js
fun.toString === Function.prototype.toString
```

* Same reasoning as above — all function objects inherit this method.

✅ **Result:** `true`

---

### 5️⃣

```js
Object.toString === Object.prototype.toString
```

* `Object` is a function → its `.toString` comes from `Function.prototype`.
* `Object.prototype.toString` is from the base object.
* Different prototypes entirely.

✅ **Result:** `false`

---

### 6️⃣

```js
Function.toString === Function.prototype.toString
```

* `Function` is a function → its `.toString` method comes from `Function.prototype`.
* That’s literally the same function reference.

✅ **Result:** `true`

---

# ✅ Final Output

| Expression                                          | Result  | Why                                                          |
| --------------------------------------------------- | ------- | ------------------------------------------------------------ |
| `obj.toString === Object.toString`                  | `false` | Object is a function; `{}` inherits from `Object.prototype`. |
| `fun.toString === Function.toString`                | `true`  | Both share `Function.prototype.toString`.                    |
| `obj.toString === Object.prototype.toString`        | `true`  | `{}` inherits it directly.                                   |
| `fun.toString === Function.prototype.toString`      | `true`  | All functions share that method.                             |
| `Object.toString === Object.prototype.toString`     | `false` | Function vs Object prototype methods.                        |
| `Function.toString === Function.prototype.toString` | `true`  | `Function` itself uses its own prototype method.             |

---

# 🧠 TL;DR

* Every function’s `.toString` comes from `Function.prototype`.
* Every plain object’s `.toString` comes from `Object.prototype`.
* `Function` (the constructor) is special — it’s both a **function** and **its own constructor**, so its `.toString` is **the same** as `Function.prototype.toString`.
