console.log([1] == 1); // true
console.log([1] == "1"); // true
console.log(["1"] == "1"); // true
console.log(["1"] == 1); // true
console.log([1] == ["1"]); // false
console.log(new Boolean(true) == 1); // true
console.log(new Boolean(true) == new Boolean(true)); // false
console.log(Boolean(true) == "1"); // true
console.log(Boolean(false) == [0]); // true
console.log(new Boolean(true) == "1"); // true
console.log(new Boolean(false) == [0]); // false
console.log(null == undefined); // true
