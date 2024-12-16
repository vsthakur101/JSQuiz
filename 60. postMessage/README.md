# JavaScript Event Loop and Asynchronous Execution Explanation

## Code
```javascript
console.log(1)

window.onmessage = () => {
  console.log(2)
}

Promise.resolve().then(() => {
  console.log(3)
})

setTimeout(() => {
  console.log(4)
}, 0)

console.log(5)

window.postMessage('')

console.log(6)
```

## Output
```
1
5
6
3
2
4
```

## Execution Order Explanation

### Synchronous Execution
1. `console.log(1)` executes immediately
2. `window.onmessage` callback is registered
3. Promise callback is registered
4. `setTimeout` callback is registered
5. `console.log(5)` executes
6. `window.postMessage('')` triggers message event
7. `console.log(6)` executes

### Microtasks Queue
* Promise `.then()` callback executes, logging `3`

### Message Queue
* `window.onmessage` callback executes, logging `2`

### Macrotasks Queue
* `setTimeout` callback executes, logging `4`

## Key Points
1. Synchronous code executes first
2. Microtasks (Promises) execute before message queue
3. Message queue callbacks execute before macrotasks
4. Event order:
   * Synchronous code
   * Microtasks
   * Message queue
   * Macrotasks (setTimeout)