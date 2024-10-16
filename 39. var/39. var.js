function foo() {
  console.log(i); // undef
  for (var i = 0; i < 3; i++) {
    console.log(i); // 4
  }
}

foo();
