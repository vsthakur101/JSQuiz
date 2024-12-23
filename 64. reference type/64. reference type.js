const obj = {
  msg: 'Sagar',
  foo() {
    console.log(this.msg)
  },
  bar() {
    console.log('Code')
  }
}

obj.foo();
(obj.foo)();
(obj.foo || obj.bar)();

// Sagar, Sagar, undefined