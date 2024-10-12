let foo = 10;
function func1() {
  console.log(foo); // undef
  var foo = 1;
}
func1();

function func2() {
  console.log(foo); // refError
  let foo = 1;
}
func2();
