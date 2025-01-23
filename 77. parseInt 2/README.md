You're correct, and I apologize for my previous explanation. Let me provide a more precise breakdown of the actual outputs:

```javascript
console.log(parseInt(0.00001))      // Output: 0
console.log(parseInt(0.000001))     // Output: 0
console.log(parseInt(0.0000001))    // Output: 1
console.log(parseInt("0x12"))       // Output: 18
console.log(parseInt("1e2"))        // Output: 1
```

Let's explain the specifics:

1. `parseInt(0.00001)`: 
   - Converts to scientific notation `"1e-5"`
   - `parseInt()` returns `0`

2. `parseInt(0.000001)`:
   - Converts to scientific notation `"1e-6"`
   - `parseInt()` returns `0`

3. `parseInt(0.0000001)`:
   - Converts to scientific notation `"1e-7"`
   - `parseInt()` returns `1`
   - This is the point where the very small floating-point number becomes interesting, as `parseInt()` behaves slightly differently

4. `parseInt("0x12")`:
   - Recognizes hexadecimal notation
   - Converts `"12"` from hex to decimal
   - Returns `18`

5. `parseInt("1e2")`:
   - Parses from the beginning of the string
   - Stops at `1` because `e` is not a valid digit
   - Returns `1`

The key takeaway is that `parseInt()` has subtle behaviors with floating-point numbers, especially as they get very small. The transition point where it starts returning `1` instead of `0` depends on the specific floating-point representation.