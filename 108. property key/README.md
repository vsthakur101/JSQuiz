
---

# 📘 JavaScript Deep Dive: Object Keys & Implicit String Coercion

## 🔍 Code Snippet

```js
const obj = {}
const a = { name: 'a' }
const b = { name: 'b' }

obj[a] = { ...a }
obj[b] = { ...b }

console.log(obj[a].name)
console.log(obj[b].name)
```

---

## ❓ What This Code Does

You create:

* An empty object `obj`
* Two different objects `a` and `b`, each with a `name` property
* Two assignments using object spreading to clone `a` and `b` into `obj[a]` and `obj[b]`
* You then log `obj[a].name` and `obj[b].name`

---

## 🧠 What Happens Under the Hood

### Step 1: Object Key Coercion

In JavaScript, **plain object keys must be strings or symbols**. When using objects (`a`, `b`) as keys, JavaScript **automatically coerces them into strings** using their `toString()` method.

```js
String(a) // => "[object Object]"
String(b) // => "[object Object]"
```

So both `obj[a]` and `obj[b]` refer to the same key:

```js
obj["[object Object]"]
```

---

### Step 2: Execution Flow

#### ✅ Memory Allocation Phase (Compilation)

* `obj` is declared and memory is allocated
* `a` and `b` are declared as separate objects

#### ✅ Runtime Execution (Interpretation)

```js
obj[a] = { ...a } 
```

* `a` is coerced to `"[object Object]"`
* Becomes:

  ```js
  obj["[object Object]"] = { name: 'a' }
  ```

```js
obj[b] = { ...b }
```

* `b` is also coerced to `"[object Object]"`
* This **overwrites** the previous value:

  ```js
  obj["[object Object]"] = { name: 'b' }
  ```

#### ✅ Logging

```js
console.log(obj[a].name) // => obj["[object Object]"].name => "b"
console.log(obj[b].name) // => obj["[object Object]"].name => "b"
```

---

## 🧪 Final Output

```bash
b
b
```

Even though `a` and `b` are different objects, they’re treated as the same key when used in a plain object — because of string coercion.

---

## 🧯 How to Fix It: Use `Map`

If you want to preserve the uniqueness of object references as keys, use a `Map`:

```js
const obj = new Map()
const a = { name: 'a' }
const b = { name: 'b' }

obj.set(a, { ...a })
obj.set(b, { ...b })

console.log(obj.get(a).name) // a
console.log(obj.get(b).name) // b
```

✅ `Map` supports object references as keys **without coercing them to strings**.

---

## 📌 Summary Table

| Concept                    | Explanation                           |
| -------------------------- | ------------------------------------- |
| Object keys in `{}`        | Must be strings or symbols            |
| Object keys like `a`, `b`  | Coerced to `"[object Object]"`        |
| Behavior in `obj[a] = ...` | Overwrites the same key               |
| Use `Map` to fix           | Allows real object references as keys |

---