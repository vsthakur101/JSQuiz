function curry(fn) {
  return function curried(...args) {
    // Check if we have enough arguments and no placeholders in the required positions
    if (args.length >= fn.length && 
        args.slice(0, fn.length).every(item => item !== curry.placeholder)) {
      return fn.call(this, ...args);
    }
    
    // Return a function that will merge new arguments into placeholders
    return function(...nextArgs) {
      // Map over current args, replacing placeholders with nextArgs (shift removes first element)
      const mappedArgs = args.map(item => 
        item === curry.placeholder && nextArgs.length ? nextArgs.shift() : item
      );
      // Recursively call curried with mapped args + remaining nextArgs
      return curried.call(this, ...mappedArgs, ...nextArgs);
    };
  };
}


curry.placeholder = Symbol()