# JavaScript Object Property and Prototypal Inheritance Explanation

## Code
```javascript
const a = {}
Object.defineProperty(a, 'foo1', {
  value: 1
})
const b = Object.create(a)
b.foo2 = 1

console.log(b.foo1)
console.log(b.foo2)

b.foo1 = 2
b.foo2 = 2

console.log(b.foo1)
console.log(b.foo2)
```

## Output
```
1
1
1
2
```

## Explanation

### Initial Setup
1. Object `a` is created with property `foo1`:
   - `foo1` is defined using `Object.defineProperty`
   - Default property descriptors: 
     - `writable: false`
     - `enumerable: false`
     - `configurable: false`

2. Object `b` is created with `a` as prototype:
   - `foo2` is added normally with value `1`
   - Inherits `foo1` from object `a`

### Property Access
1. First `console.log`:
   - `b.foo1`: Returns `1` (inherited from `a`)
   - `b.foo2`: Returns `1` (own property)

2. Property Assignment:
   - `b.foo1 = 2`: Fails silently (property is non-writable)
   - `b.foo2 = 2`: Succeeds (normal property)

3. Second `console.log`:
   - `b.foo1`: Still `1` (cannot be modified)
   - `b.foo2`: Now `2` (successfully modified)

## Key Points
1. `Object.defineProperty` creates non-writable properties by default
2. Inherited non-writable properties cannot be modified on child objects
3. Regular properties can be modified normally
4. Property descriptor settings affect property behavior