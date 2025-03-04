Let's break down each scenario:

```javascript
var a = 'a'
try {
  throw new Error('WEB.DEV')
} catch {
  var a = 'a1'
}
console.log(a) // 'a1'
```
- An error is thrown and caught
- Inside the catch block, `a` is reassigned to 'a1'
- This changes the original `a` variable
- So `console.log(a)` outputs 'a1'

```javascript
var b = 'b'
try {
  throw new Error('WEB.DEV')
} catch (b) {
  var b = 'b1'
}
console.log(b) // 'b'
```
- The catch parameter `(b)` creates a new block-scoped variable `b`
- This shadows the outer `b` variable
- Inside the catch block, a new `b` is declared and assigned 'b1'
- But this doesn't affect the outer `b`
- So `console.log(b)` outputs the original 'b'

```javascript
var c = 'c'
try {
  throw new Error('WEB.DEV')
} catch (error) {
  var c = 'c1'
}
console.log(c) // 'c1'
```
- An error is caught with a parameter `error`
- Inside the catch block, `c` is reassigned to 'c1'
- This changes the original `c` variable
- So `console.log(c)` outputs 'c1'

The key differences are in how the catch block parameter interacts with existing variables.