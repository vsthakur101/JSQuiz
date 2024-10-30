# JavaScript Asynchronous Code Execution Explanation

## Code
```javascript
console.log(1)

setTimeout(() => {
  console.log(2)
}, 10)

setTimeout(() => {
  console.log(3)
}, 0)

new Promise((_, reject) => {
  console.log(4)
  reject(5)
  console.log(6)
}).then(() => console.log(7))
.catch(() => console.log(8))
.then(() => console.log(9))
.catch(() => console.log(10))
.then(() => console.log(11))
.then(console.log)
.finally(() => console.log(12))

console.log(13)
```

## Execution Order Explanation

### 1. Synchronous Code (Call Stack)
* `console.log(1)` executes first as it's synchronous
* Promise executor runs synchronously:
  * `console.log(4)` executes
  * `reject(5)` is called
  * `console.log(6)` executes
* `console.log(13)` executes last among synchronous code

### 2. Microtasks (Promise Queue)
* Promise chain executes after synchronous code but before setTimeout callbacks:
  * First `.then()` is skipped due to rejection
  * `.catch()` prints `8`
  * Next `.then()` prints `9`
  * Next `.then()` prints `11`
  * `.then(console.log)` prints `undefined` (as no value was returned)
  * `.finally()` prints `12`

### 3. Macrotasks (Task Queue)
* `setTimeout` callbacks execute last:
  * 0ms timeout prints `3`
  * 10ms timeout prints `2`

## Output
```
1
4
6
13
8
9
11
undefined
12
3
2
```

## Key Points
1. Synchronous code executes first
2. Microtasks (Promises) execute next
3. Macrotasks (setTimeout) execute last
4. Promise chain continues even after rejection is handled
5. `.finally()` always executes at the end of Promise chain