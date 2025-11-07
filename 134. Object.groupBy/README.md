
---

````markdown
# 📘 Understanding `Object.groupBy()` in JavaScript

> A deep dive into how the snippet executes, why it may throw an error, and how to create a working polyfill.

---

## 🧩 Code Snippet

```js
const items = [
  { id: 'a' },
  { id: 'b' },
];

const groups = Object.groupBy(items, ({ id }) => id);

console.log(items.toString());
console.log(groups.toString());
````

---

## 🧠 Step-by-Step Execution

### 1. Array Declaration

```js
const items = [
  { id: 'a' },
  { id: 'b' },
];
```

Creates an array with two objects:

```js
[
  { id: 'a' },
  { id: 'b' }
]
```

---

### 2. Using `Object.groupBy()`

```js
const groups = Object.groupBy(items, ({ id }) => id);
```

#### ✅ Expected Behavior (If Supported)

`Object.groupBy()` groups array elements based on the callback return value.
Each unique key becomes a property of a new object, whose value is an array of items matching that key.

| Input         | Callback Result | Group                |
| ------------- | --------------- | -------------------- |
| `{ id: 'a' }` | `'a'`           | `'a': [{ id: 'a' }]` |
| `{ id: 'b' }` | `'b'`           | `'b': [{ id: 'b' }]` |

**Expected Output:**

```js
{
  a: [{ id: 'a' }],
  b: [{ id: 'b' }]
}
```

---

### ⚠️ Actual Behavior (in Most Environments)

If you run this code in most Node.js or browsers **before full support** of `Object.groupBy`, you’ll get:

```
TypeError: Object.groupBy is not a function
```

This happens because `Object.groupBy()` is a **Stage-3 ECMAScript proposal** — not yet standard across all runtimes.

---

### 3. Console Output (if Supported)

```js
console.log(items.toString());
// → [object Object],[object Object]

console.log(groups.toString());
// → [object Object]
```

Explanation:

* `items.toString()` calls each object’s `.toString()` → `[object Object],[object Object]`
* `groups.toString()` returns `[object Object]` since plain objects don’t override `.toString()`

---

## 🛠️ Polyfill for `Object.groupBy`

> A **polyfill** replicates a modern feature in older JavaScript environments.

<details>
<summary><b>💡 Click to view Polyfill Implementation</b></summary>

```js
if (typeof Object.groupBy !== 'function') {
  Object.groupBy = function (items, callback) {
    if (!Array.isArray(items)) {
      throw new TypeError('First argument must be an array');
    }
    if (typeof callback !== 'function') {
      throw new TypeError('Second argument must be a function');
    }

    return items.reduce((acc, item) => {
      const key = callback(item);
      if (!Object.prototype.hasOwnProperty.call(acc, key)) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {});
  };
}
```

</details>

---

## ✅ Working Example with Polyfill

<details>
<summary><b>💻 Click to view full runnable code</b></summary>

```js
if (typeof Object.groupBy !== 'function') {
  Object.groupBy = function (items, callback) {
    if (!Array.isArray(items)) {
      throw new TypeError('First argument must be an array');
    }
    if (typeof callback !== 'function') {
      throw new TypeError('Second argument must be a function');
    }

    return items.reduce((acc, item) => {
      const key = callback(item);
      if (!Object.prototype.hasOwnProperty.call(acc, key)) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {});
  };
}

const items = [
  { id: 'a' },
  { id: 'b' },
];

const groups = Object.groupBy(items, ({ id }) => id);

console.log(items.toString());
console.log(groups);
```

</details>

---

## 🧾 Output (with Polyfill)

```
[object Object],[object Object]
{
  a: [ { id: 'a' } ],
  b: [ { id: 'b' } ]
}
```

---

## 📚 Summary

| Expression         | Result                            | Notes                          |
| ------------------ | --------------------------------- | ------------------------------ |
| `Object.groupBy`   | ❌ `TypeError`                     | Not supported in most runtimes |
| `items.toString()` | `[object Object],[object Object]` | Array of objects               |
| `groups`           | `{ a: [...], b: [...] }`          | Works correctly after polyfill |

---

## 📎 References

* [MDN: `Object.groupBy()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy)
* [TC39 Proposal: Array Grouping](https://github.com/tc39/proposal-array-grouping)

---

## 🧭 Final Notes

* Use this polyfill to ensure compatibility across environments.
* In Node.js **v22+** and **modern browsers (Chrome 118+)**, `Object.groupBy()` is natively available.
* Prefer native support when available for better performance.

```