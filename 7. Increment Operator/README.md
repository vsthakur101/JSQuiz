### Step-by-Step Execution

1. **`let a = 1;`**
   - Initializes the variable `a` with the value `1`.
   - **Value of `a`:** `1`

2. **`const b = ++a;`**
   - The `++a` is a pre-increment operation.
   - `a` is incremented first, so `a` becomes `2`.
   - `b` is then assigned the value of `a`, which is `2`.
   - **Value of `a`:** `2`
   - **Value of `b`:** `2`

3. **`const c = a++;`**
   - The `a++` is a post-increment operation.
   - `c` is assigned the current value of `a`, which is `2`.
   - After the assignment, `a` is incremented, so `a` becomes `3`.
   - **Value of `a`:** `3`
   - **Value of `c`:** `2`

4. **`console.log(a);`**
   - Logs the current value of `a`, which is `3`.
   - **Console Output:** `3`

5. **`console.log(b);`**
   - Logs the value of `b`, which is `2`.
   - **Console Output:** `2`

6. **`console.log(c);`**
   - Logs the value of `c`, which is `2`.
   - **Console Output:** `2`
