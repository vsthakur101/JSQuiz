

```txt
console.log(Function.prototype.__proto__ === Object.prototype)   // true
console.log(Function.__proto__ === Object.__proto__)             // true
console.log(Function.__proto__.__proto__ === Object.prototype)   // true
console.log(Object.constructor.prototype === Object.prototype)   // false
console.log(Function.constructor === Function)                   // true
console.log(Object.constructor === Object)                       // false
console.log(Array.__proto__ === Function.__proto__)              // true
console.log(Array.constructor === Function)                      // true
console.log(Object.__proto__ === Function)                       // false
console.log(Function.__proto__ === Function.prototype)           // true
console.log(Object instanceof Object)                            // true
console.log(Function instanceof Function)                        // true
console.log(Map instanceof Map)                                  // false
```

---

## Quick reference of the important pieces

* `Foo.prototype` — the object used as `[[Prototype]]` for instances created by `new Foo()`.
* `someObject.__proto__` — the internal `[[Prototype]]` of `someObject` (same as `Object.getPrototypeOf(someObject)`).
* `Constructor.constructor` — the `constructor` property on the constructor *function object* (not commonly used).
* `X instanceof Y` checks whether `Y.prototype` appears anywhere on the prototype chain of `X`.

Also remember:

* All constructors (like `Object`, `Function`, `Array`, `Map`) are themselves **function objects**.
* Every function object (including `Function` itself) has `__proto__ === Function.prototype`.
* `Function.prototype` is itself a function object whose `__proto__ === Object.prototype`.

---

## Line-by-line reasoning

1. `Function.prototype.__proto__ === Object.prototype` → **true**
   `Function.prototype` is a function object (the built-in empty function). Its internal prototype (`__proto__`) is `Object.prototype`.

2. `Function.__proto__ === Object.__proto__` → **true**
   `Function.__proto__` is `Function.prototype` (because `Function` is a function). `Object.__proto__` is also `Function.prototype` (because `Object` is a function/constructor). So both sides are the same object.

3. `Function.__proto__.__proto__ === Object.prototype` → **true**
   `Function.__proto__` → `Function.prototype`. Then `. __proto__` of that is `Object.prototype`. Same as (1)/(2) chain.

4. `Object.constructor.prototype === Object.prototype` → **false**
   `Object.constructor` is `Function` (the `constructor` property on the `Object` function points to `Function`). So left side is `Function.prototype`, which is **not** the same object as `Object.prototype`.

5. `Function.constructor === Function` → **true**
   The `constructor` property of the `Function` function is `Function` itself. (Function was constructed by the Function constructor — effectively a self-reference.)

6. `Object.constructor === Object` → **false**
   `Object.constructor` is `Function` (not `Object`). So this is false.

7. `Array.__proto__ === Function.__proto__` → **true**
   `Array` is a function, so `Array.__proto__ === Function.prototype`. And `Function.__proto__ === Function.prototype`. Therefore they are equal.

8. `Array.constructor === Function` → **true**
   As a function object, `Array`’s `constructor` is `Function`.

9. `Object.__proto__ === Function` → **false**
   `Object.__proto__` is `Function.prototype`, while `Function` is the Function constructor itself. They are different objects.

10. `Function.__proto__ === Function.prototype` → **true**
    The function object `Function` has its internal prototype set to `Function.prototype`.

11. `Object instanceof Object` → **true**
    `instanceof` checks whether `Object.prototype` appears on the prototype chain of the left-hand side. The `Object` function’s prototype chain is:
    `Object.__proto__ === Function.prototype` → `Function.prototype.__proto__ === Object.prototype`. So `Object.prototype` *is* on the chain → `true`.

12. `Function instanceof Function` → **true**
    `Function.__proto__ === Function.prototype`, so `Function.prototype` is directly on `Function`’s chain → `true`.

13. `Map instanceof Map` → **false**
    For `Map instanceof Map` to be true, `Map.prototype` would need to appear on the prototype chain of `Map` (the constructor function). But `Map.__proto__ === Function.prototype` and that chain does not include `Map.prototype`. So `false`.

---

## Visual minimal prototype map (useful mental model)

* `Function` (the function object)

  * `Function.__proto__ === Function.prototype`
  * `Function.prototype.__proto__ === Object.prototype`

* `Object` (the function object)

  * `Object.__proto__ === Function.prototype`
  * `Object.prototype.__proto__ === null`

* `Array`, `Map`, etc.

  * `Array.__proto__ === Function.prototype`
  * `Array.prototype.__proto__ === Object.prototype`
  * `Map.__proto__ === Function.prototype`
  * `Map.prototype.__proto__ === Object.prototype`

---
