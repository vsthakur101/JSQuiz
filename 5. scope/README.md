### Step-by-Step Execution

#### 1. `for (var i = 0; i < 5; i++) { setTimeout(() => console.log(i), 0); }`

1. **Loop Initialization**
   - The `var` keyword is used to declare `i`, which means `i` is function-scoped (or globally scoped if not inside a function).
   - The loop runs 5 times, incrementing `i` from 0 to 4.

2. **SetTimeout Call**
   - For each iteration, `setTimeout` is called with a delay of 0 milliseconds.
   - The callback function `() => console.log(i)` is added to the event queue to be executed after the loop completes.

3. **After the Loop**
   - By the time the `setTimeout` callbacks are executed, the loop has finished, and `i` has the final value of 5.
   - All 5 `setTimeout` callbacks refer to the same `i`, which is now `5`.

4. **Console Output**
   - The output for each `setTimeout` callback is `5`.
   - The console logs `5` five times.


#### 2. `for (let i = 0; i < 5; i++) { setTimeout(() => console.log(i), 0); }`

1. **Loop Initialization**
   - The `let` keyword is used to declare `i`, which means `i` is block-scoped.
   - The loop runs 5 times, incrementing `i` from 0 to 4.

2. **SetTimeout Call**
   - For each iteration, `setTimeout` is called with a delay of 0 milliseconds.
   - The callback function `() => console.log(i)` is added to the event queue.
   - Due to block-scoping, each iteration of the loop captures a unique `i` value.

3. **After the Loop**
   - The `setTimeout` callbacks are executed, each with the corresponding value of `i` from the iteration when the `setTimeout` was created.

4. **Console Output**
   - The output for each `setTimeout` callback corresponds to the value of `i` at each iteration.
   - The console logs `0`, `1`, `2`, `3`, and `4`.


