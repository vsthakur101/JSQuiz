
---

# 📘 JavaScript Execution Breakdown: `new` Constructor + Return Object

```js
function A() {
  this.dev1 = 'WEB'
  this.dev2 = 'dev'
  return {
    dev1: 'webdeveloper'
  }
}

const a = new A()
console.log(a.dev1)
console.log(a.dev2)
```

---

## 🔍 Concept Overview

| Concept                           | Explanation                                  |
| --------------------------------- | -------------------------------------------- |
| `new A()`                         | Creates a new object and binds `this` to it. |
| `this.dev1`, `this.dev2`          | Add properties to the new object.            |
| `return { dev1: 'webdeveloper' }` | Overrides the default return object.         |

---

## 🧠 Step-by-Step Execution

### ✅ 1. `new A()` Execution Process

When you call `new A()`:

1. A new empty object is created: `{}`.
2. `this` inside `A()` is bound to that new object.
3. These properties are added:

   ```js
   this.dev1 = 'WEB'
   this.dev2 = 'dev'
   ```
4. But then an **explicit object** is returned:

   ```js
   return { dev1: 'webdeveloper' }
   ```

🔁 So instead of returning the default object (`this`), JavaScript returns the **explicit object** from the return statement.

### ✅ 2. Value of `a`

```js
a = { dev1: 'webdeveloper' } // dev2 is lost
```

---

## 🧪 Console Output

```txt
webdeveloper
undefined
```

* `a.dev1` → `"webdeveloper"` (from returned object)
* `a.dev2` → `undefined` (not present in the returned object)

---

## 🔁 Summary Table

| Behavior                          | Explanation                                     |
| --------------------------------- | ----------------------------------------------- |
| `this.dev1 = 'WEB'`               | Assigned to internal object                     |
| `this.dev2 = 'dev'`               | Assigned to internal object                     |
| `return { dev1: 'webdeveloper' }` | Overrides the returned instance                 |
| `new A()` result                  | `{ dev1: 'webdeveloper' }`                      |
| `a.dev2`                          | `undefined` — because `dev2` was never returned |

---

## ✅ Pro Tip

* If you use `new`, avoid returning explicit objects unless you want to **override** the constructed instance.
* If you return a **primitive value** (like a string, number, etc.), it is ignored and the `this` object is returned instead.

```js
function B() {
  this.x = 10
  return 42
}
console.log(new B().x) // ✅ 10 (primitive return is ignored)
```

---