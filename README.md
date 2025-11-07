# JSQuiz — JavaScript Deep Concepts Examples

A collection of small, focused examples that demonstrate tricky or deep JavaScript behaviors. Each numbered folder (for example `134. Object.groupBy`) contains a single snippet and an optional per-example `README.md` explaining the intent, expected output, and notes.

## Purpose

This repository is meant as a learning and reference collection for intermediate-to-advanced JavaScript topics: promises, async/await, `this`/binding, hoisting, generators, typed arrays, quirks of coercion, and many more.

## Project layout

- `NNN. TopicName/` — a folder per example. `NNN` is a numeric index to keep the examples ordered.
- Each example folder typically contains:
  - `NNN. TopicName.js` — the runnable example snippet.
  - `README.md` — (optional) explanation, expected output, edge cases and run instructions.
- `README.md` (this file) — repository-level overview and quick start.

## Quick start — run an example

1. Clone the repository:

```bash
git clone https://github.com/vsthakur101/JSQuiz
cd JSQuiz
```

2. Run an example with Node.js (from repo root). Quote the path if it contains spaces:

```bash
node "134. Object.groupBy/134. Object.groupBy.js"
```

If an example's `README.md` exists, it will explain whether a modern Node version or a browser is required. Some examples use newer APIs (for example `Object.groupBy`) — if your runtime doesn't support them, the example README will show a fallback or polyfill.

## How examples are organized

- The numeric prefix (e.g. `134`) is primarily for ordering. The folder name after the number indicates the topic (e.g. `Object.groupBy`).
- Look for a `README.md` inside the example folder for a short explanation and run notes. For example: `134. Object.groupBy/README.md` documents grouping with `Object.groupBy` and includes a fallback using `Array.prototype.reduce`.

## Contributing

- Want to add an example or improve an explanation? Add a new numbered folder with a clear name and include a runnable snippet and a short `README.md` describing the goal and expected output.
- Keep snippets small and focused — a single concept per example helps readers and reviewers.

## Notes

- Use `JSON.stringify(value, null, 2)` or `console.dir(value, { depth: null })` to inspect objects in examples — `toString()` is often not useful for objects.
- If you intend to run all examples programmatically, be aware some snippets may exit the process or rely on browser-only APIs.

## License & contact

Check the repository root for license information or open an issue/PR in the upstream repository if you want to discuss changes.

---
