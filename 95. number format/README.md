
---

# 🧠 JavaScript Octal Literals and Subtraction

```javascript
console.log(017 - 011)
console.log(018 - 011)
console.log(019 - 011)
```

## ✅ What’s Going On?

In **JavaScript**, when a number starts with `0` and is **followed only by digits 0–7**, it is treated as an **octal (base 8)** literal (in non-strict mode).

Let's break each line down:

---

### 🔹 Line 1: `console.log(017 - 011)`
- `017` in octal = **15** in decimal
- `011` in octal = **9** in decimal
- So:
  ```javascript
  console.log(15 - 9) // Output: 6
  ```

---

### 🔹 Line 2: `console.log(018 - 011)`
- `018` starts with a `0`, but **`8` is not a valid octal digit**.
- JavaScript sees that it's not a valid octal, so it falls back to **decimal**.
  - `018` = **18** (decimal)
- `011` is still octal = **9**
- So:
  ```javascript
  console.log(18 - 9) // Output: 9
  ```

---

### 🔹 Line 3: `console.log(019 - 011)`
- Same logic:
  - `019` is invalid octal → treated as decimal = **19**
  - `011` in octal = **9**
  - So:
    ```javascript
    console.log(19 - 9) // Output: 10
    ```

---

## 🛑 Note on Strict Mode

In **strict mode**, octal literals like `017` are **not allowed**. You should instead use the `0o` prefix for octal:

```javascript
console.log(0o17 - 0o11) // Safer and standard way
```

---

## ✅ Final Output

```javascript
6
9
10
```

---