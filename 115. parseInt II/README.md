
---

# 📘 JavaScript Execution Breakdown: `parseInt()` Behavior

```js
console.log(parseInt(' 1'))
console.log(parseInt(' 00001'))
console.log(parseInt(' 0100'))
console.log(parseInt(' 1e2 '))
```

---

## 🔍 How `parseInt()` Works

```js
parseInt(string, [radix])
```

* Parses a string and returns an integer.
* **Ignores leading whitespace.**
* Parses **from left to right** until a non-digit (or invalid digit) is found.
* If `radix` is not provided:

  * If the string starts with `0x`, it's parsed as hexadecimal.
  * If it starts with `0`, behavior varies historically (see below).
  * Else, parsed as decimal (base 10).

---

## 🧠 Execution Line-by-Line

### ✅ `parseInt(' 1')`

* Whitespace is trimmed.
* Parses `'1'` → `1`.
* 👉 **Output:** `1`

---

### ✅ `parseInt(' 00001')`

* Whitespace is trimmed.
* Parses from left: `'00001'` → `1`
* Leading zeros are ignored in modern JS (ECMAScript 5+).
* 👉 **Output:** `1`

---

### ✅ `parseInt(' 0100')`

* Trims whitespace → `'0100'`
* Parses from left: `'0100'`
* 🔍 In **modern JS (ES5+)**, leading `0` **does NOT imply octal** unless `radix` is provided.

  * So parsed as **decimal** → `100`
* 👉 **Output:** `100`

> 🧠 **Legacy Note**: In older JS engines, `'0100'` might have been treated as **octal** → `64`. This no longer applies in modern browsers without a radix.

---

### ✅ `parseInt(' 1e2 ')`

* Trims whitespace → `'1e2'`
* Parses from left:

  * `'1'` is a digit → accepted
  * `'e'` is **invalid for `parseInt()`** (not base-10 digit)
  * Parsing **stops at `'e'`**
* So only `'1'` is parsed.
* 👉 **Output:** `1`

> ❗ Note: `'1e2'` **is valid** in `Number('1e2')` → gives `100`, but not in `parseInt`.

---

## 🧪 Console Output

```txt
1
1
100
1
```

---

## ⚠️ Gotchas & Differences

| Input     | `parseInt()`    | `Number()` | Notes                          |
| --------- | --------------- | ---------- | ------------------------------ |
| `' 1e2 '` | `1`             | `100`      | `parseInt` stops at `'e'`      |
| `'0100'`  | `100` (decimal) | `100`      | Octal parsing removed in ES5+  |
| `'0x10'`  | `16`            | `16`       | Hexadecimal allowed by default |
| `'00001'` | `1`             | `1`        | Leading zeros ignored          |

---

## ✅ Safe Practice

Always pass a radix to `parseInt()`:

```js
parseInt('0100', 10)  // ✅ Always parsed as decimal → 100
```

---