
---

## 📘 Title: Understanding Execution of `this` in JavaScript Objects

### ✅ Code Overview

```js
const a = {
  dev: 'web.dev',
  update: name => {
    this.dev = name
  }
}
a.update('frontend.dev')
console.log(a.dev)
```

---

## 🚀 What This Code Does

You define an object `a` with:

* A property `dev` set to `'web.dev'`
* A method `update` defined as an **arrow function**, which is supposed to update the `dev` property.

Then you call `a.update('frontend.dev')` and log `a.dev`.

Expected output:

```js
web.dev
```

---

## 🔍 Why Doesn't It Update `a.dev`?

The reason lies in **how arrow functions handle `this`**.

### 🧠 Key Concept: Arrow Functions and `this`

Arrow functions do **not** have their own `this`. Instead, they **inherit `this` from their lexical scope**, i.e., from the environment in which they were defined.

In this case, `update` is defined **inside the global or module context**, so:

```js
this.dev = name
```

...refers to `this` from the outer scope — not the object `a`. Therefore, it tries to assign `dev` to the `this` of the outer scope (which is `undefined` in strict mode or `window`/`global` in sloppy mode), **not the `a` object**.

---

## 🧵 Step-by-Step Execution in the JS Engine

### 1. **Global Execution Context Created**

* Memory is allocated for variables and functions (`a` is `undefined` at this point).
* JS engine hoists declarations.

### 2. **Variable Assignment**

```js
const a = {
  dev: 'web.dev',
  update: name => {
    this.dev = name
  }
}
```

* `a` is assigned an object with a property `dev` and a method `update`.
* The `update` method is an arrow function, which closes over the outer `this`.

### 3. **Function Call**

```js
a.update('frontend.dev')
```

* Calls the `update` method.
* `this` inside `update` refers to **outer lexical scope**, not the `a` object.
* Therefore, `this.dev = name` modifies **something else**, not `a.dev`.

### 4. **Console Log**

```js
console.log(a.dev) // logs 'web.dev'
```

* `a.dev` was never changed, so it prints the original value.

---

## 🛠️ How to Fix It

If you want `this` to refer to `a`, use a **regular function**, not an arrow function:

```js
const a = {
  dev: 'web.dev',
  update: function(name) {
    this.dev = name;
  }
}
```

Now, `this` refers to the calling object (`a`), and the output will be:

```js
frontend.dev
```

---

## 📦 Final Notes

* Arrow functions are great for lexical scoping, but **not for object methods** that rely on dynamic `this`.
* Understanding how **execution context** and `this` resolution works is crucial for writing correct JS.

---