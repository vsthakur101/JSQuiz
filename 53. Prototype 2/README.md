`undefined`

Explanation:
- `function F()` defines a constructor function.
- `new F()` creates an instance `f` of the `F` constructor.
- The `prototype` property is defined on the constructor function `F`, not on the instance `f`.
- When we try to access `f.prototype`, it returns `undefined` because instances do not have a `prototype` property.