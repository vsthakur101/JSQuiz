
---

# 📘 JavaScript Execution Breakdown: `yield` vs `yield*`

```js
function* genA() {
  yield [1, 2, 3]
}

function* genB() {
  yield* [1, 2, 3]
}

console.log(genA().next().value)
console.log(genB().next().value)
```

---

## 🔍 Key Concepts

| Concept     | Description                                                                              |
| ----------- | ---------------------------------------------------------------------------------------- |
| `function*` | Defines a **generator function**, which can pause/resume execution via `yield`.          |
| `yield`     | Emits a value from the generator, pausing execution.                                     |
| `yield*`    | Delegates to another iterable (e.g., array, generator) and yields its values one by one. |

---

## 🧠 1. Memory Creation Phase

* Two generator functions are hoisted: `genA` and `genB`.

```text
Memory:
genA: function*
genB: function*
```

---

## ⚙️ 2. Execution Phase (Line-by-Line)

### ✅ `genA().next().value`

* `genA()` creates a generator object.
* First call to `.next()` executes until the first `yield`.
* `yield [1, 2, 3]` returns the entire **array** as a **single value**.
* 👉 Output: `[1, 2, 3]`

```js
// genA execution:
yield [1, 2, 3]  → yields once → done
```

---

### ✅ `genB().next().value`

* `genB()` also creates a generator object.
* But it uses `yield* [1, 2, 3]` → **delegates** to the iterable `[1, 2, 3]`.
* So it **yields values one by one**: `1`, then `2`, then `3`.
* First `.next()` call gives the first item: `1`.
* 👉 Output: `1`

```js
// genB execution:
yield* [1, 2, 3]  
→ yields 1  → (next) yields 2 → yields 3 → done
```

---

## 🧪 Console Output

```txt
[1, 2, 3]
1
```

---

## ⚔️ Difference Between `yield` and `yield*`

| Syntax             | Behavior                                             | Example Output     |
| ------------------ | ---------------------------------------------------- | ------------------ |
| `yield [1, 2, 3]`  | Yields the whole array as one value                  | `[1, 2, 3]`        |
| `yield* [1, 2, 3]` | Iterates through array and yields one item at a time | `1`, then `2`, `3` |

---

## 🎯 Use Case Tips

* Use `yield` when you want to return a **single item** (even an array/object).
* Use `yield*` to **flatten** another iterable into your generator output.

---