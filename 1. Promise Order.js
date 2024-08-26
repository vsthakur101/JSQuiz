console.log(1);
const promise = new Promise((resolve) => {
  console.log(2);
  resolve();
  console.log(3);
});

console.log(4);

promise
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });

console.log(7);

setTimeout(() => {
  console.log(8);
}, 10);

setTimeout(() => {
  console.log(9);
}, 0);

//1, 2, 3, 4, 7, 5, 6, 9, 8

/*
1. First the script will load into execution context for execution.
2. console.log(1) will be executed and log 1 on conosle
3. Promise constructor will be loaded and will create seprate context to execute and will execute console.log(2) than it will push resolve in callback queue
than it will execute console.log(3) and return promise and store it in promise variable
4. It'll execute console.log(4)
5. It'll execute first .then method by calling it's callback from callback queue (using event loop) than secong .then callback from callback queue(promise/process.nextTick/queue MicroTask etc...)
6. It'll execute console.log(7)
7. It'll pull callback from macro task queue(setTimeout/setInterval/I/O etc...) and execute console.log(9) and console.log(8)
*/
