
let dev = 'web'

function a() {
  let dev = 'DEV'
  return function() {
    console.log(dev)
  }
}

dev = 'webdev'

a()()