## Currying — Concept and How It Works in JavaScript

Currying is a functional programming technique that transforms a function with multiple arguments into a sequence of functions each taking a single (or fewer) argument. Instead of calling f(a, b, c), you can call curriedF(a)(b)(c) or mix groupings: curriedF(a, b)(c).

**Why use currying?**
- It enables partial application: pre-filling some arguments to produce specialized functions.
- It improves composability and clearer intent in functional pipelines.

**Basic example**

```js
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

curriedAdd(1)(2)(3); // 6
curriedAdd(1, 2)(3); // 6
curriedAdd(1)(2, 3); // 6
```

**Typical curry implementation (under the hood)**

- Uses a closure to remember the original function (`fn`) and any arguments collected so far.
- Checks whether the number of collected arguments meets the target arity (`fn.length`).
- If yes, calls `fn` with the collected args (preserving `this` with `.apply`). If not, returns a new function that collects more arguments.

Example implementation:

```js
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...next) {
      return curried.apply(this, args.concat(next));
    };
  };
}
```

Key implementation details explained:

- Closures: Each call to the returned `curried` function closes over `fn` and the `args` collected so far. That preserved state is how partial application is implemented.
- Arity (`fn.length`): The original function's declared parameter count is used to decide when to invoke the underlying function. For variadic functions (or when you prefer a different trigger), you can pass an explicit arity or use other strategies.
- `this` propagation: The implementation above uses `fn.apply(this, args)` and `curried.apply(this, ...)` to preserve the call-time `this`. Be careful: arrow functions have lexical `this` and cannot be rebound, so `curry`-wrapping arrow functions changes how `this` behaves.
- Argument grouping: The implementation concatenates newly provided args to previously collected ones, allowing grouped calls like `c(1,2)(3)`.

Advanced notes:

- Placeholders: Libraries sometimes support placeholders (like `_`) to skip positions when partially applying; implementing placeholders adds complexity to argument bookkeeping.
- Performance: Each partial call creates a new function and an array of args; while efficient enough for many uses, heavy use in hot paths can allocate frequently.
- Arity vs. actual arguments: If you want a curry that calls when a certain number of total arguments are collected (not necessarily `fn.length`), accept an explicit `arity` parameter.

Examples and tests

See the implementation in this folder: [135. Implement Curry/solution.js](135.%20Implement%20Curry/solution.js)

Quick try (Node):

```bash
node -e "const { curry } = require('./135. Implement Curry/solution.js'); const add = (a,b,c)=>a+b+c; console.log(curry(add)(1)(2)(3));"
```

Summary

Currying is a small but powerful pattern implemented via closures and argument accumulation. In JavaScript, the typical approach relies on `fn.length` for arity, `apply` for `this` propagation, and repeated closures to gather arguments until invocation.
