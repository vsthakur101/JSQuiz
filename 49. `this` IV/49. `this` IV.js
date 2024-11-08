var bar = 1;

function foo() {
  return this.bar++;
}

const a = {
  bar: 10,
  foo1: foo,
  foo2: function () {
    return foo();
  },
};

console.log(a.foo1.call()); // 1
console.log(a.foo1()); // 10
console.log(a.foo2.call()); // 2
console.log(a.foo2()); // 3
