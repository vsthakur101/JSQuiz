1. **`new Promise((resolve, reject) => { ... });`**
   - A new promise is created.
   - The executor function is called immediately with `resolve` and `reject` as arguments.

2. **`resolve(1);`**
   - The promise is resolved with the value `1`.
   - This means the promise is now fulfilled with the value `1`.
   - Any subsequent calls to `resolve` or `reject` are ignored because a promise can only be resolved or rejected once.

3. **`resolve(2);`**
   - This call is ignored because the promise has already been resolved with the value `1`.
   
4. **`reject("error");`**
   - This call is also ignored because the promise has already been resolved and cannot transition to the rejected state.

5. **`.then(...)`**
   - The `then` method is called with two handlers: one for fulfillment and one for rejection.
   - Since the promise was resolved with `1`, the fulfillment handler is called with the value `1`.

6. **Fulfillment Handler Execution:**
   - The fulfillment handler logs the value `1` to the console.

7. **Rejection Handler Execution:**
   - The rejection handler is not executed because the promise was resolved, not rejected.

### Final Console Output:
1