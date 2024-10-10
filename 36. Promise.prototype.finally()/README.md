## Step-by-Step Execution of Promise Chain

### 1. **`Promise.resolve(1)`**
   - A promise is resolved with the value `1`.
   - Control moves to the next `.finally()` block, but it **does not receive** the resolved value (`1`) because `.finally()` does not take any arguments.

### 2. **First `.finally()` Block**
   - **Code**:
     ```js
     .finally((data) => {
       console.log(data)
       return Promise.reject('error')
     })
     ```
   - **Step 1**: The `data` in the `finally` block is `undefined` because `.finally()` does not receive the resolved value (`1`).
   - **Step 2**: `console.log(data)` logs `undefined`.
   - **Step 3**: The `finally` block returns `Promise.reject('error')`.
   - The promise chain now rejects with `'error'` and skips the remaining `.then()` blocks, going to the first `.catch()`.


### 3. **First `.catch()` Block**
- **Code**:
  ```js
  .catch((error) => {
    console.log(error)
    throw 'error2'
  })
  ```
- **Step 1**: The `error` argument contains `'error'`, which is logged by `console.log(error)`.
- **Step 2**: The `catch` block throws a new error, `'error2'`, and the promise chain is now rejected with `'error2'`.


### 4. **Second `.finally()` Block**
- **Code**:
  ```js
  .finally((data) => {
    console.log(data)
    return Promise.resolve(2).then(console.log)
  })
  ```
- **Step 1**: The `data` in the `finally` block is `undefined` because `.finally()` does not receive the rejected value (`'error2'`).
- **Step 2**: `console.log(data)` logs `undefined`.
- **Step 3**: A new `Promise.resolve(2)` is created, and `2` is logged in the next `.then()` block.


### 5. **`.then()` After `.finally()`**
- There is no value passed to this `.then()` since the previous `.finally()` does not pass a resolution value.
- Thus, `console.log()` inside this `.then()` logs `undefined`.


### 6. **Second `.catch()` Block**
- The promise chain was rejected with `'error2'`, so the second `.catch()` block handles it.
- **Code**:
  ```js
  .catch(console.log)
  ```
- `console.log(error)` logs `'error2'`.
'
---

## Final Output in Order:
```text
undefined
error
undefined
2
undefined
error2 
```


### Key Points:
- `.finally()` does not receive any arguments.
- The promise chain continues after `.finally()`, and any errors or resolutions before it still affect the subsequent `.then()` and `.catch()` blocks.
- Each `.catch()` handles the rejected state of the promise chain, and if a new error is thrown, it continues down the chain.
