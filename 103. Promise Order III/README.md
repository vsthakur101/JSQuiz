
---

# 🔍 JavaScript Promises, `async/await`, and the Event Loop

```javascript
const createPromise = () => Promise.resolve(1)

function func1() {
  createPromise().then(console.log)
  console.log(2)
}

async function func2() {
  await createPromise()
  console.log(3)
}

console.log(4)
func1()
func2()
```

---

## 🧠 Step-by-Step Breakdown (Microtask Queue Behavior)

### ✅ 1. Synchronous Execution Begins

```js
console.log(4)  // Prints: 4
```

---

### ✅ 2. Call `func1()`

```js
createPromise().then(console.log)  // Schedules `console.log(1)` as a microtask
console.log(2)                     // Prints: 2
```

---

### ✅ 3. Call `func2()`

```js
await createPromise()
// `await` pauses `func2()` here until the promise resolves
// The rest (console.log(3)) becomes a microtask
```

So now we have two **microtasks** queued:

1. `console.log(1)` from `then`
2. `console.log(3)` from the continuation of `func2`

---

### ✅ Microtasks are run **after the current call stack clears**.

---

## ✅ Final Output:

```text
4   // synchronous
2   // synchronous
1   // from .then(console.log)
3   // from async/await continuation
```

---

## ⏱ Execution Timeline

| Order | Code                         | Output |
| ----- | ---------------------------- | ------ |
| 1     | `console.log(4)`             | 4      |
| 2     | `func1()` → `console.log(2)` | 2      |
| 3     | `func2()` → schedules log(3) |        |
| 4     | Microtask: `console.log(1)`  | 1      |
| 5     | Microtask: `console.log(3)`  | 3      |

---

## 📝 Summary

* `.then()` schedules a microtask.
* `await` also yields to the microtask queue.
* All `console.log()` **outside promises** run first.
* Then the microtasks run **in order**.

Here’s a **visual chart** to help you understand how the **event loop**, **call stack**, and **microtask queue** work for your code:

---

## 📊 JavaScript Event Loop Visual
---

### ⏱ Timeline of Execution

#### 🧵 1. **Call Stack (Synchronous Phase)**

| Time | Call Stack                  | Output | Notes                                     |
| ---- | --------------------------- | ------ | ----------------------------------------- |
| T1   | `console.log(4)`            | `4`    | Synchronous                               |
| T2   | `func1()`                   |        | Start `func1`                             |
| T3   | `createPromise().then(...)` |        | Schedules `console.log(1)` as microtask   |
| T4   | `console.log(2)`            | `2`    | Synchronous                               |
| T5   | `func2()`                   |        | Start `func2`, pauses at `await`          |
| T6   | `await createPromise()`     |        | Schedules continuation (`console.log(3)`) |

---

#### 📦 Microtask Queue (After Call Stack Clears)

| Order | Microtask Action | Output | Notes                       |
| ----- | ---------------- | ------ | --------------------------- |
| 1     | `console.log(1)` | `1`    | From `.then()` in `func1()` |
| 2     | `console.log(3)` | `3`    | From `func2()` continuation |

---

### ✅ Final Output (in order):

```text
4
2
1
3
```

---

### 📘 Visual Summary

```text
CALL STACK (Main Thread)
 ┌────────────────────┐
 │ console.log(4)     │ → 4
 │ func1()            │
 │   → .then(...)     │ → [queue: console.log(1)]
 │   → console.log(2) │ → 2
 │ func2()            │
 │   → await ...      │ → [queue: console.log(3)]
 └────────────────────┘

MICROTASK QUEUE (after call stack is empty)
 ┌─────────────┐
 │ console.log(1) │ → 1
 │ console.log(3) │ → 3
 └─────────────┘
```

---