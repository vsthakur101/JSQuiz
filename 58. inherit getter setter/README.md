# Inheritance and Getter/Setter Explanation

## Code
```javascript
let val = 0

class A {
  set foo(_val) {
    val = _val
  }
  get foo() {
    return val
  }
}

class B extends A { }

class C extends A {
  get foo() {
    return val
  }
}

const b = new B()
console.log(b.foo)
b.foo = 1
console.log(b.foo)

const c = new C()
console.log(c.foo)
c.foo = 2
console.log(c.foo)
console.log(b.foo)
```

## Output
```
0
1
2
2
2
```

## Explanation

### Class Hierarchy
1. Class `A`:
   - Defines getter and setter for `foo`
   - Uses global `val` variable
   - Setter assigns to global `val`
   - Getter returns global `val`

2. Class `B`:
   - Inherits from `A`
   - No custom implementation
   - Uses parent's getter and setter

3. Class `C`:
   - Inherits from `A`
   - Overrides getter
   - Keeps parent's setter

### Execution
1. Initially `val` is `0`

2. For `b` (instance of `B`):
   - First `console.log(b.foo)`: Returns `0`
   - `b.foo = 1`: Uses parent's setter, sets `val` to `1`
   - Second `console.log(b.foo)`: Returns `1`

3. For `c` (instance of `C`):
   - First `console.log(c.foo)`: Returns `1`
   - `c.foo = 2`: Uses parent's setter, sets `val` to `2`
   - Second `console.log(c.foo)`: Returns `2`
   - Third `console.log(b.foo)`: Returns `2` (shared global `val`)

## Key Points
1. Global `val` is shared across all instances
2. Inherited setter modifies the global variable
3. Overridden getter still uses the global variable
4. Changes to `val` are reflected across all instances