# Explanation of the Code

```javascript
let a = 'web.dev'
a[0] = 'c'
console.log(a)
```

## Step-by-Step Breakdown

1. **Variable Declaration**
   ```javascript
   let a = 'web.dev'
   ```
   - A variable `a` is declared using `let`.
   - It is assigned a string value `'web.dev'`.

2. **Attempt to Modify a Character**
   ```javascript
   a[0] = 'c'
   ```
   - Here, you are trying to change the first character (`index 0`) of the string `a` from `'b'` to `'c'`.
   - **However**, in JavaScript, **strings are immutable**.  
     You **cannot** change an individual character of a string by direct assignment like this.
   - This line will **not** throw an error, but it will simply **do nothing**.

3. **Logging the Result**
   ```javascript
   console.log(a)
   ```
   - Since the attempted modification didn't work, `a` is still `'web.dev'`.
   - Output:
     ```text
     web.dev
     ```

## Why are Strings Immutable in JavaScript?

- Strings in JavaScript are **primitive types** and **immutable**.
- Once a string is created, it **cannot be altered** — you can only create a **new string**.

If you want to actually change the first character, you would need to **create a new string**, like this:

```javascript
let a = 'web.dev'
a = 'c' + a.slice(1)
console.log(a) // Output: cfe.dev
```