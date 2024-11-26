# Class Getter and Setter Behavior Explanation

## Code
```javascript
class A {
  val = 1
  get foo() {
    return this.val
  }
}

class B {
  val = 2
  set foo(val) {
    this.val = val
  }
}
const a = new A()
const b = new B()
console.log(a.foo)
console.log(b.foo)
b.foo = 3
console.log(b.val)
console.log(b.val)
```

## Output
```
1
undefined
3
3
```

## Explanation

### Class A
1. `val` instance property initialized to `1`
2. Getter `foo` returns `this.val`
3. When `a.foo` is accessed, returns `1`

### Class B
1. `val` instance property initialized to `2`
2. Only setter `foo` defined
3. Setter modifies `this.val`
4. No getter defined for `foo`

### Execution
1. `console.log(a.foo)`: Returns `1`
2. `console.log(b.foo)`: Returns `undefined` (no getter)
3. `b.foo = 3`: Uses setter to set `this.val` to `3`
4. `console.log(b.val)`: Returns `3`
5. `console.log(b.foo)`: Returns `undefined` (still no getter)

## Key Points
1. Classes can have independent getters and setters
2. Lack of getter means accessing the property returns `undefined`
3. Setter modifies instance property
4. Getters and setters are independent methods