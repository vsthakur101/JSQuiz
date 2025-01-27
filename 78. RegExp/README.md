```javascript
const arr = ["a", "b", "c", "1"];
const regExp = /^[a-z]$/gi;
const chars = arr.filter((elem) => regExp.test(elem)); 
console.log(chars); // ["a", "c"]
```

### **Explanation:**

1. **Initial State of the Regular Expression:**
   - `regExp = /^[a-z]$/gi`:
     - Matches a **single alphabetic character** (case-insensitive).
     - Has the `g` (global) flag, so the regex keeps track of its `lastIndex`.

2. **Iteration Details:**
   - The `.filter()` method tests each element in `arr` with `regExp.test(elem)`. Here's what happens for each element:

   **First Element (`"a"`):**
   - `regExp.lastIndex = 0` (initial state).
   - `"a"` matches the regex (`test()` returns `true`).
   - `lastIndex` is **increased** (though irrelevant for single characters, it advances internally).

   **Second Element (`"b"`):**
   - `regExp.lastIndex = 1` (carried over from the previous match because of the `g` flag).
   - `"b"` **does not match** because the `g` flag causes the regex engine to start looking at the wrong position.
   - `test()` returns `false`.
   - **`lastIndex` resets to `0`.**

   **Third Element (`"c"`):**
   - `regExp.lastIndex = 0` (reset from the previous failure).
   - `"c"` matches the regex (`test()` returns `true`).
   - `lastIndex` is **increased** again.

   **Fourth Element (`"1"`):**
   - `regExp.lastIndex = 1` (carried over from the `"c"` match).
   - `"1"` does not match the regex (`test()` returns `false`).
   - **`lastIndex` resets to `0`.**

3. **Filtered Output:**
   - Elements that matched the regex: `["a", "c"]`.

---

### **Why Does This Happen?**

The global (`g`) flag makes the `lastIndex` property persist across multiple `test()` calls. When `test()` returns `true`, `lastIndex` is advanced, but it doesn't reset for the next string in the array. This leads to unpredictable results unless the regex is specifically designed to handle this behavior.

---

### **Key Takeaways:**

1. The **global flag (`g`)** should not be used when testing individual, unrelated strings like elements of an array. It causes `lastIndex` to advance and potentially skip matches.
   
2. To fix this and get the expected output `["a", "b", "c"]`, **remove the `g` flag**:
   ```javascript
   const regExp = /^[a-z]$/i; // No 'g' flag
   const chars = arr.filter((elem) => regExp.test(elem)); 
   console.log(chars); // ["a", "b", "c"]
   ```

3. If you need to use the `g` flag, manually reset the `lastIndex` property before each `test()` call:
   ```javascript
   const regExp = /^[a-z]$/gi;
   const chars = arr.filter((elem) => {
       regExp.lastIndex = 0; // Reset before each test
       return regExp.test(elem);
   });
   console.log(chars); // ["a", "b", "c"]
   ```

---

### Final Output:
```javascript
["a", "c"]
```

This is a classic example of how `RegExp` with the `g` flag behaves differently compared to when the flag is omitted. 😊