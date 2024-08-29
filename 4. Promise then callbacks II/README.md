### Step-by-Step Execution

1. **`Promise.resolve(1)`**
   - A promise is created and immediately fulfilled with the value `1`.

2. **First `.then((val) => { console.log(val); return val + 1; })`**
   - The `onFulfilled` function is executed with the value `1`.
   - `console.log(val)` outputs `1`.
   - The function returns `val + 1`, which is `2`, to the next `.then()`.

3. **Second `.then((val) => { console.log(val); })`**
   - The `onFulfilled` function is executed with the value `2`.
   - `console.log(val)` outputs `2`.
   - Since no return value is provided, the next `.then()` receives `undefined`.

4. **Third `.then((val) => { console.log(val); return Promise.resolve(3).then((val) => { console.log(val); }) })`**
   - The `onFulfilled` function is executed with the value `undefined`.
   - `console.log(val)` outputs `undefined`.
   - The function returns a `Promise.resolve(3)`, which triggers another `.then()` within it.

5. **Nested `.then((val) => { console.log(val); })` inside the Third `.then()`**
   - The `Promise.resolve(3)` is fulfilled with the value `3`.
   - The `onFulfilled` function is executed with the value `3`.
   - `console.log(val)` outputs `3`.
   - The inner `then` completes, and the outer `then` does not return anything, so the next `.then()` receives `undefined`.

6. **Fourth `.then((val) => { console.log(val); return Promise.reject(4); })`**
   - The `onFulfilled` function is executed with the value `undefined`.
   - `console.log(val)` outputs `undefined`.
   - The function returns `Promise.reject(4)`.

7. **`.catch((val) => { console.log(val); })`**
   - The promise is rejected with the value `4`.
   - The `onRejected` function is executed with the value `4`.
   - `console.log(val)` outputs `4`.

8. **`.finally((val) => { console.log(val); return 10; })`**
   - The `finally` handler is executed.
   - `console.log(val)` outputs `undefined` because `finally` does not receive the rejection value or resolution value.
   - The handler completes, but its return value (`10`) is ignored by the promise chain.

9. **Final `.then((val) => { console.log(val); })`**
   - The `onFulfilled` function is executed with the value `undefined` (from the previous `.catch()`).
   - `console.log(val)` outputs `undefined`.

### Final Console Output