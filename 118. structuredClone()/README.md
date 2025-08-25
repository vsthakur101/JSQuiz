
---

# Execution Walkthrough (Corrected)

```js
const error = new Error('😢')
error.name = 'SyntaxError'
console.log(error instanceof Error)
console.log(error instanceof SyntaxError)

const clonededError = structuredClone(error)
console.log(clonededError instanceof Error)
console.log(clonededError instanceof SyntaxError)
```

---

## Step 1. Create the error

```js
const error = new Error('😢')
```

* `error` is an **Error instance**:

  * `error.message === "😢"`
  * `error.name === "Error"` (default)
  * prototype chain: `error → Error.prototype → Object.prototype`.

---

## Step 2. Change the name

```js
error.name = "SyntaxError"
```

* Only changes a **string property**, not the prototype.
* Now:

  * `error.name === "SyntaxError"`
  * But still: `error instanceof Error === true`.

---

## Step 3. Check `instanceof`

```js
console.log(error instanceof Error)       // true
console.log(error instanceof SyntaxError) // false
```

✅ Matches what we expect. The **constructor name string** does not affect `instanceof`.

---

## Step 4. Structured clone

```js
const clonededError = structuredClone(error)
```

Here’s the tricky part:

* **Structured cloning of `Error` objects is special-cased** (per [HTML spec § StructuredSerialize](https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal)).
* The clone **does preserve the original Error type** (`Error`, `TypeError`, `SyntaxError`, etc.), instead of downgrading to a plain object.
* It copies:

  * `name` (whatever string you set)
  * `message`
  * `cause` (if provided)
  * `stack` (in some engines)

So `clonededError` is **still an actual `Error` instance**, not a plain object.

---

## Step 5. Check `instanceof` after cloning

```js
console.log(clonededError instanceof Error)       // true
console.log(clonededError instanceof SyntaxError) // true
```

* First one ✅ `true` → It’s still an `Error`.
* Second one ✅ `true` → Because you **mutated `name = "SyntaxError"`** before cloning, the structured clone constructor actually rehydrates it as a `SyntaxError`.

---

## Final Output

```
true
false
true
true
```

---

## Why is the last one `true`?

* The HTML spec says:

  > *When cloning an `Error`, the type of the clone is chosen based on the `name` property if it matches a known error constructor (`SyntaxError`, `TypeError`, etc.). Otherwise, it defaults to `Error`.*

* So:

  * Original: an `Error` object with `name = "SyntaxError"`.
  * StructuredClone: creates a **real `SyntaxError`** object with the same properties.

---

## Key Takeaways

1. Changing `.name` alone does **not** affect `instanceof`.
2. But **structuredClone** uses `.name` to decide the constructor of the cloned error.
3. That’s why the clone passes both `instanceof Error` and `instanceof SyntaxError`.

---