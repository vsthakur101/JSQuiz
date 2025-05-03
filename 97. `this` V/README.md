
---

# 🔍 JavaScript `this` Context Issue in Callback

```javascript
const obj = {
  prefix: 'WEB',
  list: ['1', '2', '3'],
  log() {
    this.list.forEach(function (item) {
      console.log(this.prefix + item);
    });
  },
};

obj.log();
```

---

## 🔁 What’s Happening?

### Object Structure:

- `prefix`: `"WEB"`
- `list`: `['1', '2', '3']`
- `log()`: method that calls `forEach()` on the list.

---

## 🧠 The Key Issue

Inside the `forEach()`:
```javascript
function (item) {
  console.log(this.prefix + item);
}
```
- This function is a **regular function**, not an arrow function.
- In **non-strict mode**, `this` inside a regular function **defaults to `window` (or `undefined` in strict mode)**.
- Therefore, `this.prefix` is **undefined**.

---

## 🖨️ Output:

```text
undefined1
undefined2
undefined3
```

---

## ✅ How to Fix It

### ✅ Option 1: Use Arrow Function
Arrow functions **don't have their own `this`**, so they inherit it from the parent scope (i.e., `log()` method).

```js
log() {
  this.list.forEach(item => {
    console.log(this.prefix + item);
  });
}
```

✅ Output:
```text
WEB1
WEB2
WEB3
```

---

### ✅ Option 2: Use `.bind(this)`

```js
log() {
  this.list.forEach(function (item) {
    console.log(this.prefix + item);
  }.bind(this));
}
```

---

### ✅ Option 3: Store `this` in a Variable

```js
log() {
  const self = this;
  this.list.forEach(function (item) {
    console.log(self.prefix + item);
  });
}
```

---

## 💡 Final Note

Always be careful when using `this` inside nested functions. Use arrow functions or `.bind()` to ensure the correct context.