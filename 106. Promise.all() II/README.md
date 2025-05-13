
---

# 🔍 `Promise.all` with `async/await` and Rejected Promises

```javascript
const promise1 = Promise.resolve(1)
const promise2 = Promise.resolve(2)
const promise3 = Promise.resolve(3)
const promise4 = Promise.reject(4)

const promiseAll = async () => {
  const group1 = await Promise.all([promise1, promise2])
  const group2 = await Promise.all([promise3, promise4])
  return [group1, group2]
}

promiseAll().then(console.log).catch(console.log)
```

---

## 🧠 Step-by-Step Execution

### ✅ `Promise.all([promise1, promise2])`

* Both promises are resolved:

  ```js
  group1 = [1, 2]
  ```

### ❌ `Promise.all([promise3, promise4])`

* `promise3` resolves to `3`
* `promise4` **rejects** with `4`
* `Promise.all(...)` **immediately rejects** if **any** promise rejects
* So this line:

  ```js
  const group2 = await Promise.all([promise3, promise4])
  ```

  throws an error (`4`) and **jumps to the `catch()`**

---

## ❌ Important Note

* Since `group2` fails, the line:

  ```js
  return [group1, group2]
  ```

  is **never reached**.
* The entire `promiseAll()` rejects with the same error (`4`).

---

## ✅ Final Output

```text
4
```

(from the `.catch(console.log)`)

---

## 📌 Summary Table

| Step                          | Result             |
| ----------------------------- | ------------------ |
| `Promise.all([1, 2])`         | `[1, 2]` ✅         |
| `Promise.all([3, reject(4)])` | Rejects with `4` ❌ |
| `promiseAll()`                | Rejects with `4` ❌ |
| `.then()`                     | Skipped            |
| `.catch()`                    | Logs `4`           |

---

## ✅ Optional Fix

If you want both groups to run and catch rejections individually:

```js
const promiseAll = async () => {
  const group1 = await Promise.all([promise1, promise2])
  const group2 = await Promise.allSettled([promise3, promise4])
  return [group1, group2]
}
```