
---

# 🔍 Loose Equality (`==`) in JavaScript

```javascript
console.log([0] == '')
console.log([0] == 0)
```

---

## ⚖️ Loose Equality (`==`) – Type Coercion Rules

JavaScript’s `==` performs **type coercion** if operands are of different types. Let's break down each case:

---

### 🔹 `console.log([0] == '')`

#### Step-by-step coercion:

1. `[0]` is an **array**, so it’s converted to a **primitive** using `.toString()`:

   ```js
   [0].toString() → '0'
   ```
2. Now you're comparing:

   ```js
   '0' == '' → false
   ```

✅ **Output**:

```text
false
```

---

### 🔹 `console.log([0] == 0)`

#### Step-by-step coercion:

1. `[0]` → `'0'` (via `.toString()`)
2. `'0'` → `0` (string to number for comparison)
3. Now you're comparing:

   ```js
   0 == 0 → true
   ```

✅ **Output**:

```text
true
```

---

## 📌 Final Output:

```text
false
true
```

---

## ⚠️ Pro Tip

Avoid using `==` unless you **fully understand type coercion rules**. Prefer `===` (strict equality) for safer and more predictable comparisons.