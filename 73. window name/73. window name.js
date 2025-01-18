var a = 1;
(function() {
  console.log(a + this.a); // NaN
  var a = '2'
  console.log(a + this.a); // 2undefined
})();

var name = 1;
(function() {
  console.log(name + this.name); // NaN
  var name = '2'
  console.log(name + this.name); // 2undefined
})();

//In node