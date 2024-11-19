# JavaScript Timer Execution Order Explanation

## Code
```javascript
setTimeout(() => {
    console.log(2)
}, 2)

setTimeout(() => {
    console.log(1)
}, 1)

setTimeout(() => {
    console.log(0)
}, 0)
```

## Output
```
0
1
2
```

## Explanation

### Timer Queue Processing
1. All three timers are queued in order of their delay:
   * 0ms delay timer (logs 0)
   * 1ms delay timer (logs 1)
   * 2ms delay timer (logs 2)

2. The JavaScript event loop processes these timers in order of their timeout values
   * Smallest timeout executes first
   * Equal timeouts would execute in order of registration

### Key Points
1. Timer delays are minimum wait times, not guaranteed execution times
2. Even with small differences (0ms, 1ms, 2ms), timers maintain their execution order
3. Timers are macrotasks and execute after all microtasks
4. Browser's minimum timer delay is typically 4ms, but the relative order is maintained