### Step-by-Step Execution

1. **`const p1 = Promise.resolve(1)`**
   - Creates a promise `p1` that is immediately fulfilled with the value `1`.

2. **`const p2 = new Promise((resolve) => resolve(p1))`**
   - Creates a new promise `p2` that resolves to the promise `p1`.

3. **`const p3 = Promise.resolve(p1)`**
   - Creates a promise `p3` that resolves to the same promise `p1`. Since `p1` is already a promise, `p3` will essentially be the same as `p1`.

4. **`const p4 = p2.then(() => new Promise((resolve) => resolve(p3)))`**
   - `p2` is a promise that resolves to `p1`.
   - When `p2` resolves, it triggers the `.then()` callback, which returns a new promise that resolves to `p3`.
   - Since `p3` is essentially `p1`, this new promise resolves to `p1`, making `p4` a promise that resolves to `p1`.

5. **`const p5 = p4.then(() => p4)`**
   - `p4` resolves to `p1`.
   - When `p4` resolves, it triggers the `.then()` callback, which returns `p4` itself. 
   - Thus, `p5` is essentially a promise that resolves to `p4`.

6. **`console.log(p1 == p2)`**
   - `p1` and `p2` are different promises:
     - `p1` is a promise resolved with `1`.
     - `p2` is a promise resolved with `p1`.
   - **Console Output:** `false`

7. **`console.log(p1 == p3)`**
   - `p1` and `p3` are essentially the same because `p3` is a promise resolved with `p1`.
   - **Console Output:** `true`

8. **`console.log(p3 == p4)`**
   - `p3` is resolved to `p1`, but `p4` is a promise that resolves to `p1`, not `p3` itself.
   - **Console Output:** `false`

9. **`console.log(p4 == p5)`**
   - `p4` is a promise that resolves to `p1`, while `p5` is a promise that resolves to `p4`, making them different promises.
   - **Console Output:** `false`
