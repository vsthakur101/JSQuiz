[1, 2, 3].reduce((a, b) => {
  console.log(a, b);
});

// undefined ,1
// 1, 2
// 2, 3

[1, 2, 3].reduce((a, b) => {
  console.log(a, b);
}, 0);

//0, 1
//1,2
//2,3
