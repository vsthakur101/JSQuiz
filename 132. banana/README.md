
---

# The Code

```js
console.log(('b' + 'a' + + 'b' + 'a').toLowerCase())
```

---

## Step 1 — Start with `'b' + 'a'`

* `'b' + 'a'` → string concatenation → `'ba'`

✅ Intermediate value:

```
'ba'
```

---

## Step 2 — The tricky part: `+ 'b'`

There’s a **unary plus** (`+`) operator in front of `'b'`.

So we’re not doing `"ba" + "b"`, but rather:

```js
"ba" + (+ "b")
```

Now:

* The unary `+` tries to convert `'b'` to a **number**.
* `'b'` is **not numeric**, so `Number('b')` → `NaN`.

✅ So:

```
+ 'b'  →  NaN
```

---

## Step 3 — Continue concatenation

Now we have:

```js
'b' + 'a' + NaN + 'a'
```

Concatenation happens left to right.

* `'b' + 'a'` → `'ba'`
* `'ba' + NaN` → `'baNaN'` (string + number = string)
* `'baNaN' + 'a'` → `'baNaNa'`

✅ Result before `.toLowerCase()`:

```
"baNaNa"
```

---

## Step 4 — Apply `.toLowerCase()`

```js
"baNaNa".toLowerCase()
```

→ `'banana'`

✅ **Final Output:**

```
banana
```

---

# 🧩 Why this works

* `'b' + 'a'` is just normal concatenation.
* The middle `+ + 'b'` part introduces the **unary plus** → `NaN`.
* `"ba" + NaN + "a"` becomes `"baNaNa"`.
* `.toLowerCase()` → `"banana"` 🍌

---

# ✅ Final Answer

```txt
banana
```

---