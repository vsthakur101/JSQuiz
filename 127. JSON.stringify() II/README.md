
---

# Deep Explanation of the Snippet

```js
console.log(JSON.stringify(undefined))
console.log(JSON.stringify([undefined]))
```

---

## 1. `JSON.stringify(undefined)`

* According to the spec, when `undefined` is passed directly:

  * It is **not valid JSON**.
  * So `JSON.stringify(undefined)` → `undefined` (the JavaScript value, not the string `"undefined"`).

✅ Output:

```
undefined
```

---

## 2. `JSON.stringify([undefined])`

* Here, we have an array with a single element `undefined`.
* Inside arrays:

  * `undefined`, `function`, and `symbol` values are replaced with **`null`** when stringified.
* So `[undefined]` becomes `[null]`.

✅ Output:

```
[null]
```

---

## 3. Why the Difference?

* **Top-level `undefined`** → whole value omitted → `undefined`.
* **`undefined` inside an array** → replaced with `null`.
* **`undefined` inside an object property** → property is dropped entirely.

Example:

```js
console.log(JSON.stringify({x: undefined})); // "{}"
console.log(JSON.stringify([1, undefined, 2])); // "[1,null,2]"
```

---

## 4. Final Output Recap

```
undefined
[null]
```

---