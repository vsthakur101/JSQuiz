
---

# 🔍 `this` in Object Methods (Regular vs Arrow Functions)

```javascript
class Site {
    name = 'WEB'
    getHandle() {
      return {
        name: 'website',
        getName1() {
          return this.name
        },
        getName2: () => {
          return this.name
        },
        getName3: function() {
          return this.name
        }
      }
    }
}

const site = new Site()
console.log(site.getHandle().getName1()) // ?
console.log(site.getHandle().getName2()) // ?
console.log(site.getHandle().getName3()) // ?
```

---

## ✅ Breakdown of Each Method

### 🔸 `getName1()`

```js
getName1() {
  return this.name
}
```

* It's a **regular function**.
* Called as `site.getHandle().getName1()`, so `this` refers to the object returned by `getHandle()`, which is:

  ```js
  {
    name: 'website',
    ...
  }
  ```
* ✅ Output: `'website'`

---

### 🔸 `getName2: () => { ... }`

```js
getName2: () => {
  return this.name
}
```

* This is an **arrow function**, which **captures `this` from the surrounding lexical scope**.

* The surrounding scope is `getHandle()` — a method of the `Site` class.

* So `this` refers to the instance of `Site`, which has `name = 'WEB'`.

* ✅ Output: `'WEB'`

---

### 🔸 `getName3: function() { ... }`

```js
getName3: function() {
  return this.name
}
```

* Regular function (not arrow).

* Called as `site.getHandle().getName3()`

* So `this` refers to the same object with `name: 'website'`

* ✅ Output: `'website'`

---

## ✅ Final Output

```text
website
WEB
website
```

---

## 📌 Summary Table

| Method       | Type             | `this` refers to                   | Output      |
| ------------ | ---------------- | ---------------------------------- | ----------- |
| `getName1()` | Regular Function | returned object from `getHandle()` | `'website'` |
| `getName2()` | Arrow Function   | lexical scope → `Site` instance    | `'WEB'`     |
| `getName3()` | Regular Function | returned object from `getHandle()` | `'website'` |

---