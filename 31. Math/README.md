## Step-by-Step Execution

1. **Expression: `1 / 0`**
   - Division of any positive number by `0` results in positive infinity (`Infinity`).
   - Result: `Infinity`

2. **Expression: `0 / 0`**
   - Division of `0` by `0` is undefined, resulting in `NaN` (Not-a-Number).
   - Result: `NaN`

3. **Expression: `-1 / 0`**
   - Division of any negative number by `0` results in negative infinity (`-Infinity`).
   - Result: `-Infinity`

4. **Expression: `1 / 0 * 0`**
   - `1 / 0` results in `Infinity`, then `Infinity * 0` results in `NaN` (multiplying infinity by zero is undefined).
   - Result: `NaN`

5. **Expression: `1 / 0 * 1`**
   - `1 / 0` results in `Infinity`, and `Infinity * 1` is still `Infinity`.
   - Result: `Infinity`

6. **Expression: `1 / 0 * -1`**
   - `1 / 0` results in `Infinity`, and `Infinity * -1` results in `-Infinity`.
   - Result: `-Infinity`

7. **Expression: `1 / 0 * 1 + 1 / 0 * 1`**
   - `1 / 0` results in `Infinity`, so the expression becomes `Infinity + Infinity`.
   - The result of adding two infinities is still `Infinity`.
   - Result: `Infinity`

8. **Expression: `1 / 0 * 1 - 1 / 0 * 1`**
   - `1 / 0` results in `Infinity`, so the expression becomes `Infinity - Infinity`.
   - Subtracting `Infinity` from `Infinity` is undefined, resulting in `NaN`.
   - Result: `NaN`

9. **Expression: `1 / 0 * 1 * (1 / 0 * 1)`**
   - `1 / 0` results in `Infinity`, so the expression becomes `Infinity * Infinity`.
   - The result of multiplying `Infinity` by `Infinity` is still `Infinity`.
   - Result: `Infinity`

10. **Expression: `1 / 0 * 1 / (1 / 0 * 1)`**
    - `1 / 0` results in `Infinity`, so the expression becomes `Infinity / Infinity`.
    - Dividing `Infinity` by `Infinity` is undefined, resulting in `NaN`.
    - Result: `NaN`

11. **Expression: `0 / Infinity`**
    - Division of `0` by `Infinity` results in `0` (zero divided by any large number tends to zero).
    - Result: `0`

12. **Expression: `0 * Infinity`**
    - Multiplying `0` by `Infinity` is undefined and results in `NaN`.
    - Result: `NaN`

## Final Output:
```js
Infinity
NaN
-Infinity
NaN
Infinity
-Infinity
Infinity
NaN
Infinity
NaN
0
NaN
