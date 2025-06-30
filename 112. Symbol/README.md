
---

# 📘 JavaScript Execution Breakdown: `Symbol` as Object Keys

```js
const symbol = Symbol('WEB')

const a = {
  [symbol]: 'WEB',
  BFE: 'WEB'
}

console.log(symbol in a)
console.log('WEB' in a)
console.log(Object.keys(a).length)
```

---

## 🧠 What is a `Symbol`?

* `Symbol` is a **primitive and unique** data type introduced in ES6.
* Symbols are often used as **non-enumerable object property keys**, to avoid name collisions.

```js
const symbol = Symbol('WEB')
// A unique identifier, even if another symbol has the same description
```

---

## 🔍 Step-by-Step Execution

### ✅ Object `a` Structure

```js
const a = {
  [symbol]: 'WEB',   // Symbol-keyed property
  BFE: 'WEB'         // String-keyed property
}
```

* Object `a` has **two keys**:

  * A symbol key: `Symbol('WEB')` → Not enumerable
  * A string key: `'BFE'`

---

### ✅ `console.log(symbol in a)`

* The `in` operator checks if a property **exists** in the object (including prototype chain).
* Works for **both** string and symbol keys.
* Since `symbol` was used as a key, this returns:

  ```js
  true
  ```

---

### ✅ `console.log('WEB' in a)`

* Checks whether the **string `'WEB'`** exists as a key in object `a`.
* It doesn’t — only `'BFE'` and a symbol key exist.
* So this returns:

  ```js
  false
  ```

---

### ✅ `console.log(Object.keys(a).length)`

* `Object.keys()` only returns **enumerable string keys**, **not symbols**.
* So it will return: `['BFE']`
* `.length` → `1`

---

## 🧪 Console Output

```txt
true
false
1
```

---

## 🧵 Under the Hood

| Check                   | Returns | Why?                                                              |
| ----------------------- | ------- | ----------------------------------------------------------------- |
| `symbol in a`           | `true`  | Symbol is a valid key in `a`, and `in` works with symbols.        |
| `'WEB' in a`            | `false` | `'WEB'` is not a key; it's a value.                               |
| `Object.keys(a).length` | `1`     | Only `'BFE'` is a string key; symbol keys are skipped by default. |

---

## 🔐 Pro Tip: Getting Symbol Keys

To get **symbol keys** from an object:

```js
Object.getOwnPropertySymbols(a)  // → [Symbol('WEB')]
```

To get **all keys** (string + symbol):

```js
Reflect.ownKeys(a)  // → ['BFE', Symbol('WEB')]
```

---