
---

# 🔍 JavaScript `typeof` and Logical NOT Operator

```javascript
const a = 'BFE.dev'

if (!typeof a === 'string') {
  console.log('string')
} else {
  console.log('not a string')
}
```

---

## 🧠 What You Might Expect

You might expect this to print:

```text
string
```

Because `a` is clearly a string. But it **does not**.

---

## ❌ The Issue: Operator Precedence

This part:

```js
!typeof a === 'string'
```

Is interpreted as:

```js
(!typeof a) === 'string'
```

Let’s break it down:

1. `typeof a` → `'string'`
2. `!typeof a` → `!('string')` → `false` (because `'string'` is truthy)
3. So:

   ```js
   false === 'string' → false
   ```

That means the `if` condition is `false`, so it runs the `else` block.

---

## ✅ Final Output

```text
not a string
```

---

## ✅ Correct Way to Check the Type

You should write:

```js
if (typeof a !== 'string') {
  console.log('not a string')
} else {
  console.log('string')
}
```

✅ Output:

```text
string
```

---

## 📌 Summary

| Code                     | Evaluates to | Meaning         |
| ------------------------ | ------------ | --------------- |
| `!typeof a === 'string'` | `false`      | Incorrect logic |
| `typeof a !== 'string'`  | `false`      | Correct logic   |

---