# JavaScript Event Loop and Asynchronous Execution Explanation

## Code
```javascript
console.log(1)

const mc = new MessageChannel()

mc.port1.onmessage = () => {
  console.log(2)
}

Promise.resolve().then(() => {
  console.log(3)
})

setTimeout(() => {
  console.log(4)
}, 0)

console.log(5)

mc.port2.postMessage('')

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
2. `MessageChannel` is created
3. Message event handler is registered
4. Promise callback is registered
5. `setTimeout` callback is registered
6. `console.log(5)` executes
7. `mc.port2.postMessage('')` triggers message event
8. `console.log(6)` executes

### Microtasks Queue
* Promise `.then()` callback executes, logging `3`

### Message Queue
* `mc.port1.onmessage` callback executes, logging `2`

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
5. `MessageChannel` provides a way to create asynchronous communication between different parts of the application