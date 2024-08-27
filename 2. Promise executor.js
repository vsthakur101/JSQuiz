// This is a JavaScript Quiz from BFE.dev

new Promise((resolve, reject) => {
  resolve(1);
  resolve(2);
  reject("error");
}).then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log("error");
  }
);

//1, error

/*
1. It'll load Promise constructor into execution context and push callback to macro queue
2. It'll execute first resolve method than vanish everything from execution context

*/
