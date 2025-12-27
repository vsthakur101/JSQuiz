# Implementing `curry` with Placeholder Support — Explanation

## Overview

This README explains an implementation of `curry(fn)` that supports placeholders. The wrapper returns a partially-applicable version of `fn` where a sentinel `curry.placeholder` (a `Symbol`) marks holes to be filled later.

## High-level behavior

- `curry(fn)` returns a `curried(...args)` function that accumulates arguments across calls.
- The wrapped function executes only when both conditions are true:
  - At least `fn.length` arguments are available (`args.length >= fn.length`).
  - The first `fn.length` argument positions contain no placeholders.
- If the conditions aren't met, `curried` returns another function that accepts more arguments and merges them positionally into the existing `args`.

## Key concepts and invariants

- Placeholder: `curry.placeholder = Symbol()` — a unique sentinel used to reserve argument positions.
- Positional filling: incoming arguments fill placeholders left-to-right.
- Extra arguments beyond `fn.length` are appended and usually ignored by `fn` (only first `fn.length` are passed).
- `this` preservation: final invocation uses `fn.call(this, ...args)` so the original `this` is forwarded.

## How merging works (precise mechanics)

When an inner call supplies `nextArgs`, the implementation typically does:

```javascript
const mappedArgs = args.map(item =>
  item === curry.placeholder && nextArgs.length ? nextArgs.shift() : item
);
// then append any leftover nextArgs: mappedArgs.concat(nextArgs)
```

- `map` iterates over the current `args` and replaces each `curry.placeholder` with the next available value from `nextArgs` (via `shift()`), consuming `nextArgs` left-to-right.
- After mapping, any remaining `nextArgs` are appended to the mapped array.
- Because `shift()` mutates `nextArgs`, the incoming array is consumed. If that matters, callers should pass copies.

Important subtleties:
- A `nextArg` that itself equals `curry.placeholder` will be treated as a value — effectively reintroducing a placeholder into the merged array unless the implementation explicitly treats placeholders specially when passed as next args.
- Using `shift()` is clear and straightforward but has potential performance costs for large `nextArgs` (reindexing).

## Simple example (base condition)

For a `join(a,b,c)` and `curriedJoin = curry(join)`:

`curriedJoin(_, 2)(1, 3)` proceeds as:

1. First call: `args = [_, 2]` → returns function.
2. Second call: `nextArgs = [1, 3]` → `_` becomes `1` (shift), `mappedArgs = [1,2]`, leftover `3` appended → `[1,2,3]`.
3. If `fn.length === 3` and no placeholders in first 3 positions, call `join(1,2,3)`.

## Detailed trace (complex example)

Call sequence: `curriedJoin(_, _, _)(1)(_, 3)(2)` for `join(a,b,c)`:

- Call 1: `args = [_, _, _]` → returns function.
- Call 2: `nextArgs = [1]` → fill first placeholder → `[1, _, _]` → returns function.
- Call 3: `nextArgs = [_, 3]` → mapping sees second slot is placeholder; the first `nextArg` is the placeholder symbol. If it's treated as a literal value, result becomes `[1, _, 3]` (placeholder preserved in second spot). Returns function.
- Call 4: `nextArgs = [2]` → fill remaining placeholder → `[1,2,3]` → execute `join(1,2,3)`.

(Note: some implementations treat a placeholder passed as `nextArg` as a special token to reinsert a hole; behavior is implementation-specific.)

## Under-the-hood — JavaScript engine behavior

1. Closures and allocation
   - `curry(fn)` creates a function object for `curried` stored on the heap; it closes over `fn` and any other lexical data.
   - Each time `curried` is invoked and returns a new partial function, the engine creates a new function object (closure) that captures the merged `args` array.
   - Those closures keep references alive to their captured `args` until they are garbage-collected.

2. Call chain vs call stack
   - Typical currying implementations return new functions rather than performing deep nested synchronous recursion. That means the synchronous call stack does not grow for each partial application; instead you get a sequence of function returns. Only when `fn` is finally invoked does a call frame for `fn` appear on the stack.
   - If an implementation used recursion that immediately calls the next function synchronously, the call stack could grow — most practical designs avoid deep stack growth by returning functions.

3. Memory and GC
   - Each returned partial function and each merged array are heap allocations. Holding onto many partials (e.g., storing them in variables) retains memory until GC reclaims them.
   - Temporary arrays and function objects are garbage-collected when no longer referenced.

4. `this` handling
   - Using `fn.call(this, ...args)` forwards the dynamic `this` from the wrapper to `fn`. This preserves method behavior when `curried` is used as an object method.
   - If you used arrow functions for the wrapper, `this` would be lexically bound and `fn.call(this, ...)` would not behave the same.

5. Symbol placeholder
   - `curry.placeholder = Symbol()` yields a unique primitive that cannot collide with normal arguments unless the same symbol is deliberately used by the caller.
   - It avoids ambiguity with common values like `undefined`, `null`, `0`, or `''`.

6. Algorithmic complexity
   - Mapping `args.map(...)` is O(m) where m = current `args.length`.
   - `shift()` on `nextArgs` is O(k) per shift in many engines (reindexing); repeated shifts are O(k^2) in the worst case. For small `nextArgs` this is fine; for larger arrays prefer an index pointer.

## Edge cases and subtle behaviors

- Oversupply: If more arguments are provided than `fn.length`, implementations usually call `fn` with the first `fn.length` values (ignoring extras).
- Placeholders as data: Passing `curry.placeholder` intentionally as an argument will be interpreted as a placeholder unless the API documents an escape mechanism.
- Mutation: Because `shift()` mutates `nextArgs`, callers passing the same array to multiple calls may be surprised.
- Infinite waiting: If callers only supply placeholders or empty calls (e.g., `curried()()`), the function may never reach the base condition and will keep returning functions.

## Performance recommendations

- Replace `shift()` with an index pointer when consuming `nextArgs` to avoid repeated reindexing.
- Avoid constructing too many transient arrays when performance-critical; reuse buffers if safe.
- Measure with realistic workloads — typical currying use is light and the overhead is negligible.

## Testing checklist

- Basic correctness
  - `const cur = curry((a,b,c)=>[a,b,c]); cur(1,2,3)` → `[1,2,3]`.
  - `cur(_,2)(1,3)` → `[1,2,3]`.
- Placeholder sequences
  - `cur(_,_,_)(1)(_,3)(2)` → `[1,2,3]`.
- Oversupply
  - `cur(1,2,3,4)` → should call `fn(1,2,3)` (confirm behavior for your implementation).
- `this` preservation
  - Use a non-arrow `fn` and call as an object method to verify `this` is forwarded.
- Mutation checks
  - Verify passing the same `nextArgs` array across calls behaves as expected.

## Implementation improvements to consider

- Avoid `shift()` in favor of an index pointer to consume `nextArgs` efficiently.
- Document that `curry.placeholder` is a sentinel and should not be used as regular argument values unless intended.
- Consider an explicit `.execute()` method if you want clearer API separation between partial-building and final execution.
