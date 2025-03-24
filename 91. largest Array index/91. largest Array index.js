const arr = []
arr[(2 ** 32) - 2] = 1
arr[(2 ** 32) - 1] = 2
console.log(arr.at(-1)) // undefined
