const obj1 = {
  foo() {
    console.log(super.foo());
  },
};

Object.setPrototypeOf(obj1, {
  foo() {
    return "bar";
  },
});

obj1.foo(); // bar

// case 2

const obj2 = {
  foo: function () {
    console.log(super.foo());
  },
};

Object.setPrototypeOf(obj2, {
  foo() {
    return "bar";
  },
});

obj2.foo(); // bar
