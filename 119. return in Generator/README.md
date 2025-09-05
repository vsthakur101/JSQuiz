
---

# Explanation of the Snippet

```js
function* gen() {
  try {
    yield 1
    yield 2
    return 3
    yield 4
  } finally {
    yield 5
    return 6
    yield 7
  }
}

console.log([...gen()])
```

---

## 1. What is a Generator?

In JavaScript:

* A `function*` defines a **generator function**.
* Calling it doesn’t run the function immediately; it returns an **iterator object**.
* Using `yield` pauses execution and returns a value to the caller.
* Later, execution can be resumed from that point.

---

## 2. The `try...finally` in Generators

Normally in JavaScript:

* `finally` always runs, no matter how the `try` block exits (either normal, `return`, or error).
* In **generators**, `yield` inside `finally` is special:

  * It still yields values before fully returning or throwing.

This lets you see "cleanup" values emitted even if the generator was finishing.

---

## 3. Step-by-Step Execution

Let’s walk through the generator:

```js
function* gen() {
  try {
    yield 1        // (A)
    yield 2        // (B)
    return 3       // (C)
    yield 4        // (never runs)
  } finally {
    yield 5        // (D)
    return 6       // (E)
    yield 7        // (never runs)
  }
}
```

### (A) First `yield 1`

* First call to `next()` → yields `1`.

### (B) Second `yield 2`

* Second call to `next()` → yields `2`.

### (C) `return 3`

* At this point, the generator **intends to return** with value `3`.
* BUT before finishing, JavaScript checks for `finally`.
* So it jumps to the `finally` block.

### (D) `yield 5` inside `finally`

* Even though the generator was returning, it **pauses at `yield 5`**.
* This lets the generator output one more value.

### (E) `return 6`

* After yielding `5`, the `return 6` forces the generator to complete.
* The `return` ends the generator permanently.
* `yield 7` is never executed.

---

## 4. What Happens with `[...gen()]`

* The spread operator `[...gen()]`:

  * Iterates through the generator until it’s fully done.
  * Collects all `yield`ed values (but **not** the final `return` value).

Step by step:

1. Collect `1`
2. Collect `2`
3. Enter `finally`, collect `5`
4. Generator finishes with `return 6` (ignored by spread)

---

## 5. Final Output

```js
console.log([...gen()])
// Output:
[1, 2, 5]
```

---

## 6. Key Takeaways

* `yield` inside `finally` can still emit values even if a `return` is triggered.
* The **spread operator ignores the final return value** of a generator.
* Once a `return` happens in `finally`, the generator is done, no further code runs.

---

Even though `return 3` appears before `yield 5`, the **`finally` block runs before exiting**, giving one last `yield` (`5`). The `return 6` then **overrides everything** and finalizes the generator.