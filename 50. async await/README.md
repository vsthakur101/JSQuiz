# JavaScript Asynchronous Code Execution Order Explanation

## Code
```javascript
async function async1(){
  console.log(1)
  await async2()
  console.log(2)
}

async function async2(){
  console.log(3)
}

console.log(4)

setTimeout(function(){
  console.log(5)
}, 0)

async1()

new Promise(function(resolve){
  console.log(6)
  resolve()
}).then(function(){
  console.log(7)
})

console.log(8)
```

## Execution Order

### 1. Synchronous Code (Main Thread)
* `console.log(4)` executes first
* `async1()` is called
  * `console.log(1)` inside `async1`
  * `async2()` is called
    * `console.log(3)` inside `async2`
* Promise constructor executes
  * `console.log(6)`
* `console.log(8)` executes

### 2. Microtasks (Promise Queue)
* Code after `await` in `async1`
  * `console.log(2)`
* Promise `.then` callback
  * `console.log(7)`

### 3. Macrotasks (Task Queue)
* `setTimeout` callback
  * `console.log(5)`

## Output
```
4
1
3
6
8
2
7
5
```

## Key Points
1. Synchronous code executes first in the main thread
2. Async functions are executed synchronously until the first `await`
3. After `await`, remaining code is queued as a microtask
4. Microtasks execute before macrotasks
5. `setTimeout` callback is queued as a macrotask
6. Promise callbacks are queued as microtasks
7. Microtasks include:
   * Promise callbacks
   * Code after `await`
8. Macrotasks include:
   * `setTimeout`
   * `setInterval`
   * Event callbacks