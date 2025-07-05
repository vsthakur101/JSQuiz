function A() {
  this.dev1 = 'WEB'
  this.dev2 = 'dev'
  return {
    dev1: 'webdeveloper'
  }
}

const a = new A()
console.log(a.dev1)
console.log(a.dev2)
