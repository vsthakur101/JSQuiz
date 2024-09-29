console.log([] == 0); // true
console.log([] == false); // false
console.log(!![]); // true
console.log([1] == 1); // true
console.log(!![1]); // false
console.log(Boolean([])); //  false
console.log(Boolean(new Boolean([]))); // false
console.log(Boolean(new Boolean(false))); // false
