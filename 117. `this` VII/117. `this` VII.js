class A {
  static dev = 'WEB'
  dev = 'Dev'
}

class B extends A {
  log() {
    console.log(this.dev)
  }

  static log() {
    console.log(this.dev)
  }
}

B.log()
new B().log()
