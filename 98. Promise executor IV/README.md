
---

# 🔍 JavaScript Promise Chaining and Resolution

```javascript
const promise = new Promise((resolve, reject) => {
  const promise2 = Promise.reject('error').then(() => {
    console.log(1)
  }, () => {
    console.log(2)
  })
  resolve(promise2)
});
promise.then(console.log);
```

---

## 🧠 Step-by-Step Breakdown

### ✅ Step 1: `promise2` is created

```js
const promise2 = Promise.reject('error').then(
  () => { console.log(1); },
  () => { console.log(2); }
)
```

* `Promise.reject('error')` creates a rejected promise.
* The `.then()` has two handlers: the **second one (onRejected)** runs.
* So it logs:

  ```text
  2
  ```
* Since this handler has **no return**, it implicitly returns `undefined`.
* So `promise2` becomes a **resolved promise with value `undefined`**.

---

### ✅ Step 2: `promise` resolves with `promise2`

```js
resolve(promise2)
```

* So `promise` will **adopt the state and value** of `promise2`.
* `promise2` is already resolved with `undefined`.

---

### ✅ Step 3: `.then(console.log)` is called

```js
promise.then(console.log);
```

* This runs **after the microtask queue**.
* Since the resolved value is `undefined`, the log is:

  ```text
  undefined
  ```

---

## 🧾 Final Output

```text
2
undefined
```

> `2` comes from the `.then(_, onRejected)` callback
> `undefined` comes from `console.log(undefined)` in the `.then(console.log)`

---