
---

# 🔍 JavaScript Comparison Operators (`>`)

```javascript
console.log(10 > 9)
console.log(10 > '9')
console.log('10' > 9)
console.log('10' > '9')
```

---

## 📘 How It Works

In JavaScript, the `>` operator **converts operands to numbers** (if needed) **unless both are strings**, in which case it does **lexicographic (dictionary) comparison**.

Let’s analyze each line:

---

### ✅ 1. `console.log(10 > 9)`
- Both are **numbers**
- → `10 > 9` → ✅ `true`

---

### ✅ 2. `console.log(10 > '9')`
- `'9'` is a string → gets **converted to number 9**
- → `10 > 9` → ✅ `true`

---

### ✅ 3. `console.log('10' > 9)`
- `'10'` is a string → gets **converted to number 10**
- → `10 > 9` → ✅ `true`

---

### ⚠️ 4. `console.log('10' > '9')`
- Both are **strings**, so JavaScript does **lexicographic (character-by-character) comparison**
- `'1'` (from `'10'`) is **less than** `'9'` (from `'9'`)
- → `'10' > '9'` → ❌ `false`

> 📌 `'10'` is **less than** `'9'` in string comparison  
> because `'1' < '9'` (it compares the **first character only**, not the whole number)

---

## ✅ Final Output:

```text
true
true
true
false
```

---
