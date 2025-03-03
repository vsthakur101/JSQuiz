Let's break down this code:

```javascript
let func = () => {
  console.log(1)
}
setTimeout(() => {
  func = () => {
    console.log(2)
  }
}, 0)

setTimeout(func, 100)
```

The output will be `1`.

Here's what happens step by step:

1. We define `func` as an arrow function that logs `1`.

2. We set up a timeout with 0ms delay that will change `func` to log `2` instead.

3. We set up another timeout with 100ms delay that will call `func`.

4. Even though the first timeout has 0ms delay, it's important to understand that JavaScript's event loop will process it after the current script execution finishes. 

5. When we pass `func` to the second `setTimeout`, we're passing the function reference, not the variable itself. JavaScript captures the current function that `func` references at this moment (the one that logs `1`).

6. After the current script execution completes, the first timeout executes and changes `func` to log `2`.

7. 100ms later, the second timeout executes the function reference it captured earlier, which is the original function that logs `1`.

This demonstrates an important concept in JavaScript: when passing functions as callbacks, what matters is the function reference at the time of passing, not the variable's value when the callback eventually executes.