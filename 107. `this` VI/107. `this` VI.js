const a = {
  dev: 'web.dev',
  update: name => {
    this.dev = name
  }
}
a.update('frontend.dev')
console.log(a.dev)