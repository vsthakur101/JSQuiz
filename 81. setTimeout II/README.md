### **Code Analysis**
```javascript
let num;

for (let i = 0; i < 5; i++) {
  num = i;
  setTimeout(() => {
    console.log(num);
  }, 100);
}
```

### **Expected Output**
```
4
4
4
4
4
```

### **Explanation**
1. The loop runs **five times** (`i = 0` to `i = 4`).
2. In each iteration:
   - `num = i;` assigns the current value of `i` to `num`.
   - `setTimeout()` schedules a delayed execution of `console.log(num)`, but the callback function will only run **after the loop completes**.
3. Since `num` is declared with `let` outside the loop, **it gets overwritten in each iteration**.
4. By the time `setTimeout` executes (after 100ms), the loop has already completed, and `num` holds its final value: **`4`**.
5. Since all `setTimeout` callbacks reference `num`, they all print `4`.

---

### **How to Fix It?**
If you want each iteration to print its own `i`, use `let` inside the loop:
```javascript
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i); // Each iteration gets a separate `i`
  }, 100);
}
```
**Output:**
```
0
1
2
3
4
```

### **Key Takeaways**
- Using `let num` outside the loop causes `num` to be **mutated** in each iteration.
- `setTimeout` functions execute **after the loop finishes**, so they see the final value of `num`.
- Declaring `let i` inside the loop ensures **block-scoping**, so each iteration captures a new `i` value.