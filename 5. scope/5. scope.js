for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0);
}

//5,5,5,5,5

for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0);
}

//0,1,2,3,4
