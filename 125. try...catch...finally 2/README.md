
---

# Deep Explanation of the Snippet

```js
const prettify = (str) => {
  try {
    if (typeof str === 'string') {
      JSON.parse(str)
      return "prettified"
    }
  } catch (e) {
    return "errored"
  } finally {
    return str
  }
}

console.log(prettify('WEB.dev'))
console.log(prettify('123'))
```

---

## 1. Key Rule: `finally` and `return`

* In JavaScript, if both `try/catch` and `finally` contain a `return`,
  the `finally` **overrides** the earlier returns.
* That means:

  * `return "prettified"` or `return "errored"` will be ignored.
  * The function will **always return whatever is in `finally`**.

---

## 2. Case 1: `prettify('WEB.dev')`

### Step-by-step:

1. `typeof str === "string"` ✅ true.
2. `JSON.parse('WEB.dev')` ❌ throws a `SyntaxError` (invalid JSON).
3. Jump to `catch`: would return `"errored"`.
4. But `finally` executes after `catch`.
5. `finally` has `return str`, i.e., `"WEB.dev"`.
6. So `"errored"` is **discarded** → function returns `"WEB.dev"`.

✅ Output:

```
WEB.dev
```

---

## 3. Case 2: `prettify('123')`

### Step-by-step:

1. `typeof str === "string"` ✅ true.
2. `JSON.parse('123')` ✅ valid JSON → parsed as number `123`.
3. Next line → `return "prettified"`.
4. But before actually returning, `finally` runs.
5. `finally` returns `str`, i.e., `"123"`.
6. So `"prettified"` is **discarded** → function returns `"123"`.

✅ Output:

```
123
```

---

## 4. Final Console Output

```txt
WEB.dev
123
```

---

## 5. Key Takeaways

* `finally` always runs, **even if a return was already executed** in `try` or `catch`.
* If `finally` has its own `return`, it **overrides** the others.
* In this function, the result will **always be the input string `str`**, no matter what.

---
