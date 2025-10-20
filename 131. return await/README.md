
---

# Code (for reference)

```js
async function a() {
  try {
    return await Promise.reject(1)
  } catch (e) {
    console.log(e)
  }
}

async function b() {
  try {
    return Promise.reject(2)
  } catch (e) {
    console.log(e)
  }
}

async function start() {
  await a()
  await b()
}

start()
```

---

# What actually happens (step-by-step)

### `a()`

* Inside `a()` you call `await Promise.reject(1)`.
* `await` causes the rejection to be **thrown** at that point, so it is caught by the surrounding `try...catch`.
* The `catch` runs and does `console.log(e)`, printing `1`.
* The `catch` has no `return`, so `a()` completes normally and its returned promise **resolves** with `undefined`.
  (No unhandled rejection.)

**Net effect:** `a()` logs `1` and resolves.

---

### `b()`

* Inside `b()` you `return Promise.reject(2)`. Important difference: you are **not using `await`**.
* Returning a rejected Promise from an `async` function causes the async function’s returned promise to **be rejected** with the same reason. However, that rejection is *not thrown inside the `try` block* — nothing is thrown synchronously for the `catch` to catch. The `catch` block does **not** run.
* So `b()` immediately returns a Promise that is already rejected with `2`.

**Net effect:** `b()` returns a rejected promise (it does not log `2`).

---

### `start()`

* `start()` does `await a()` — this waits until `a()` resolves (it does, with `undefined`), so `start` proceeds.
* Next `start()` does `await b()`. Since `b()` returned a rejected promise, the `await` **throws** the rejection inside `start()`.
* `start()` has no `try/catch`, so the rejection propagates out of `start()` — `start()` returns a rejected promise with reason `2`.

Because `start()` is called but its returned promise is not handled (no `.catch()` and not awaited), many environments will report an **unhandled promise rejection** (e.g. `Uncaught (in promise) 2`, or a Node `UnhandledPromiseRejectionWarning`).

---

# Console/output you will observe

* You will see:

```
1
```

* Then you will see the unhandled rejection for `2` reported by the environment (format varies):

  * In Chrome devtools: `Uncaught (in promise) 2`
  * In Node: `UnhandledPromiseRejectionWarning: 2` (and Node may later terminate depending on version/flags)

You will **not** see a `2` logged by `console.log(e)` inside `b()` because that `catch` never ran.

---

# Why the difference matters (summary)

* `await Promise.reject(x)` → the rejection is treated like a thrown exception at that `await` point and can be caught by surrounding `try/catch`.
* `return Promise.reject(x)` → just returns a rejected Promise; no exception is thrown inside the `try`, so the `catch` block does not run.

---

# How to fix / handle these cases

If you want both `a` and `b` to have their errors caught locally and logged, use `await` (or handle the returned promise):

Option A — use `await` in `b` as well:

```js
async function b() {
  try {
    return await Promise.reject(2)
  } catch (e) {
    console.log(e) // logs 2
  }
}
```

Option B — keep `return Promise.reject(...)` but handle rejection where you call `b()` (i.e., in `start()`):

```js
async function start() {
  await a()
  try {
    await b()
  } catch (e) {
    console.log('caught in start', e) // handles 2
  }
}

start()
```

Option C — handle `start()`'s returned promise:

```js
start().catch(e => console.log('start failed', e))
```

---

# Short checklist

* `await` throws the rejection into the function — `try/catch` can catch it.
* `return Promise.reject(...)` returns a rejected promise — `try/catch` around the `return` does **not** catch it.
* Unhandled rejections will be reported by the runtime if no one observes the rejected promise.

---
