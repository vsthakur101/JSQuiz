

---

# Understanding Static vs Instance Properties & Methods in JavaScript Classes

## Code

```javascript
class A {
  static dev = 'WEB'
  dev = 'Dev'
}

class B extends A {
  log() {
    console.log(this.dev)
  }

  static log() {
    console.log(this.dev)
  }
}

B.log()
new B().log()
```

---

## Step-by-Step Execution

### 1. Class `A` Definition

```javascript
class A {
  static dev = 'WEB'
  dev = 'Dev'
}
```

* **`static dev = 'WEB'`**

  * Belongs to the **class itself**, not its instances.
  * Accessible as `A.dev` but **not** as `new A().dev`.

* **`dev = 'Dev'`**

  * Instance property, assigned to **each object** created from the class.
  * Accessible from `this.dev` inside instance methods.

---

### 2. Class `B` Definition (Extends `A`)

```javascript
class B extends A { ... }
```

* `B` inherits:

  * **Static members** from `A` → `B.dev` = `'WEB'`.
  * **Instance members** from `A` → `this.dev` = `'Dev'` in any new instance.

* Inside `B`:

```javascript
log() {
  console.log(this.dev)
}
```

* **Instance method** — accessible only on objects created with `new B()`.

```javascript
static log() {
  console.log(this.dev)
}
```

* **Static method** — accessible only as `B.log()` (not on instances).

---

### 3. Calling `B.log()`

```javascript
B.log()
```

* `log()` here refers to **B's static method**.

* Inside the static method, `this` refers to **the class `B`** itself.

* Since `B` inherits the static property `dev` from `A`:

  ```
  this.dev === B.dev === 'WEB'
  ```

* **Output:**

  ```
  WEB
  ```

---

### 4. Calling `new B().log()`

```javascript
new B().log()
```

* `new B()` creates an **instance** of `B`.

* This instance inherits the **instance property** `dev = 'Dev'` from `A`.

* Instance `log()` method in `B` uses `this.dev` → refers to the instance’s own property.

* **Output:**

  ```
  Dev
  ```

---

## Final Output

```
WEB
Dev
```

---

## Key Takeaways

1. **Static properties** belong to the **class**, not to instances.
2. **Instance properties** belong to each object created from the class.
3. `this` inside a **static method** refers to the class.
4. `this` inside an **instance method** refers to the instance.

---

## Visual Mapping

| Context         | What `this` refers to | Value of `this.dev` |
| --------------- | --------------------- | ------------------- |
| `B.log()`       | Class `B`             | `'WEB'`             |
| `new B().log()` | Instance of `B`       | `'Dev'`             |

---