const error = new Error('😢')
error.name = 'SyntaxError'
console.log(error instanceof Error)
console.log(error instanceof SyntaxError)

const clonededError = structuredClone(error)
console.log(clonededError instanceof Error)
console.log(clonededError instanceof SyntaxError)