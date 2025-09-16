
---

### Your code

```js
function* g() {
  console.log(1);
  try {
    console.log(2)
    yield 2
    console.log(3)
    throw new Error('error')
  } finally {
    console.log(4)
  }
}

const obj = g()
obj.next()
obj.return()
```

---

### Step-by-step execution

1. **`const obj = g()`**

   * Creates the generator object.
   * Nothing runs yet.

---

2. **`obj.next()`**

   * Starts the generator.
   * Executes until the first `yield`.
   * Logs:

     ```
     1
     2
     ```
   * Then `yield 2` pauses execution, and returns `{ value: 2, done: false }`.

   At this point, execution is suspended **right after `yield 2`**, before `console.log(3)`.

---

3. **`obj.return()`**

   * `.return()` tells the generator: **finish now**.
   * When a generator is inside a `try/finally`, the `finally` block **must run** before exiting.
   * So `console.log(4)` executes.
   * The generator closes, returning `{ value: undefined, done: true }`.

---

### ✅ Output

```
1
2
4
```

---

### ⚡ Key Insights

* `.return()` skips all remaining code **after the last yield** (so `"3"` and the `throw` are never reached).
* But it still **executes any `finally` blocks**, ensuring cleanup logic runs.
* Useful pattern for resource cleanup when stopping a generator early.

---