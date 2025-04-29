
---

# Explanation of the Code

```javascript
console.log('👍'.length)
```

## Step-by-Step Breakdown

1. **The String**
   ```javascript
   '👍'
   ```
   - This is a **Unicode emoji character** (👍 = "thumbs up").

2. **The `.length` Property**
   - In JavaScript, the `.length` property of a string **counts the number of UTF-16 code units**, **not** necessarily the number of **visible characters**.
   - Some characters like emojis or special symbols are represented by **two code units** (called **surrogate pairs** in UTF-16).

3. **Result**
   ```javascript
   console.log('👍'.length)
   ```
   - The emoji 👍 is made of **two UTF-16 code units**.
   - Therefore, the output will be:

     ```text
     2
     ```

## Quick Summary

| Concept              | Value        |
|----------------------|--------------|
| Visible character    | 1 emoji (👍) |
| `.length` (UTF-16 units) | 2          |

---

## Bonus Tip 🎯
If you want to correctly count the **actual visible characters** (like emojis), you should use something like:

```javascript
console.log([... '👍'].length) // Output: 1
```
- `[...]` (spread operator) correctly handles surrogate pairs!

---