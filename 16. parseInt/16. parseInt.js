console.log(["0"].map(parseInt)); // [0]
console.log(["0", "1"].map(parseInt)); // [0,NaN]
console.log(["0", "1", "1"].map(parseInt)); // [0, NaN, 1]
console.log(["0", "1", "1", "1"].map(parseInt)); // [0, NaN, 1, 1]
