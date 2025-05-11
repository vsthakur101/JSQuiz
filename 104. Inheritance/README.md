
---

# 🔍 JavaScript Classes, Inheritance, and Prototype Properties

```javascript
class A {
  a = 'a'
}

A.prototype.c = 'c'

class B extends A {
  b = 'b'
}

const a = new A()
const b = new B()

console.log(a.a) // ?
console.log(a.b) // ?
console.log(a.c) // ?
console.log(b.a) // ?
console.log(b.b) // ?
console.log(b.c) // ?
```

---

## 🧠 Step-by-Step Breakdown

### ✅ Class `A`

* Has an instance property:

  ```js
  a = 'a'
  ```
* Has a prototype property:

  ```js
  A.prototype.c = 'c'
  ```

---

### ✅ Class `B` extends `A`

* `B` inherits from `A`, including its prototype chain.
* `B` has its own instance property:

  ```js
  b = 'b'
  ```

---

### ✅ Instances

```js
const a = new A()
const b = new B()
```

---

## 🖨️ Output Explanation

| Expression | Value       | Reason                                           |
| ---------- | ----------- | ------------------------------------------------ |
| `a.a`      | `'a'`       | Instance property from class `A`                 |
| `a.b`      | `undefined` | `A` has no property `b`                          |
| `a.c`      | `'c'`       | Found on `A.prototype`                           |
| `b.a`      | `'a'`       | Inherited from `A`                               |
| `b.b`      | `'b'`       | Defined in `B`                                   |
| `b.c`      | `'c'`       | Inherited from `A.prototype` via prototype chain |

---

## ✅ Final Output

```text
a
undefined
c
a
b
c
```

---
