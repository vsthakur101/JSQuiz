
---

# 📘 JavaScript Execution Breakdown

```js
const a = 'WEB.dev'
const b = 1

console.log(Number.isNaN(a))
console.log(Number.isNaN(b))
console.log(isNaN(a))
console.log(isNaN(b))
```

---

## 🔍 Step-by-Step Execution

### 🧠 1. Memory Creation Phase (Hoisting)

* The JavaScript engine sets up the global execution context.
* Variables declared with `const` are **hoisted but not initialized** (in a temporal dead zone until initialized).
* Built-in functions like `Number.isNaN` and `isNaN` are already available.

```text
Memory:
a: uninitialized (const)
b: uninitialized (const)
```

---

### ⚙️ 2. Execution Phase

Now the engine runs the code line by line:

#### ✅ `const a = 'WEB.dev'`

* `a` is assigned the string `'WEB.dev'`.

#### ✅ `const b = 1`

* `b` is assigned the number `1`.

#### ✅ `console.log(Number.isNaN(a))`

* `Number.isNaN()` **does NOT do type coercion**.
* Checks: is `'WEB.dev'` a `NaN` (actual Not-a-Number value)?
* `'WEB.dev'` is a string, **not** of type `Number` and **not** `NaN`.
* 👉 Returns `false`

#### ✅ `console.log(Number.isNaN(b))`

* Checks: is `1` of type number and is it `NaN`?
* `1` is a number but **not NaN**.
* 👉 Returns `false`

#### ✅ `console.log(isNaN(a))`

* `isNaN()` **does type coercion**.
* `'WEB.dev'` is **converted to number**, which fails → `NaN`.
* Now `isNaN(NaN)` → `true`
* 👉 Returns `true`

#### ✅ `console.log(isNaN(b))`

* `1` coerces to `1` (already a number).
* `isNaN(1)` → `false`
* 👉 Returns `false`

---

## 🧪 Output

```txt
false
false
true
false
```

---

## 🧠 Summary of Differences

| Function         | Type Coercion | Checks for actual `NaN`? | Example with `'WEB.dev'` |
| ---------------- | ------------- | ------------------------ | ------------------------ |
| `Number.isNaN()` | ❌ No          | ✅ Yes                    | `false`                  |
| `isNaN()`        | ✅ Yes         | ✅ After coercion         | `true`                   |

---

## 🧵 Under the Hood Notes

* `const` variables are block scoped and not accessible before initialization.
* `Number.isNaN()` is safer for checking real `NaN` values (no coercion).
* `isNaN()` can give misleading results due to coercion (use with caution).
* Both methods rely on the special **NaN** value, which is **not equal to itself** (`NaN !== NaN`).

---