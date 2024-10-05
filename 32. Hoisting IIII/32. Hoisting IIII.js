var a = 1;
function a() {}

console.log(typeof a); // Number

var b;
function b() {}
b = 1;

console.log(typeof b); // Number

function c() {}
var c = 1;

console.log(typeof c); // Number

var d = 1;

(function () {
  d = "2";
  console.log(typeof d); // String
  function d() {}
})();

console.log(typeof d); // Number

var e = 1;
const f = function e() {};

console.log(typeof e); // Number
