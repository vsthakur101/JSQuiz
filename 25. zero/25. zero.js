console.log(1 / 0); // Infinity;
console.log(-1 / 0); // -Infinity
console.log(0 / 0); // NaN
console.log(0 === -0); // true
console.log(Object.is(0, -0)); // flase
console.log(Object.is(0, Math.round(-0.5))); // false
console.log(Object.is(0, Math.round(0.5))); // false
console.log(0 * Infinity); // NaN
console.log(Infinity / Infinity); // NaN
console.log(Object.is(0, Math.sign(0))); // true
console.log(Object.is(0, Math.sign(-0))); // false
console.log(1 / -0); // -Infinity
console.log(1 / 0); // Infinity
console.log(1n / 0n); // Error
