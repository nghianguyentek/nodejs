function doSomething(callback) {
  require('fs/promises').writeFile('async.bak', '123')
  .then(err => {
    setImmediate(() => console.log("I'm the 1st setImmediate's callback in an I/O callback"))
    setTimeout(() => console.log("I'm a setTimeout's callback in an I/O callback"))
    setImmediate(() => console.log("I'm the 2st setImmediate's callback in an I/O callback"))
  })
  
  process.nextTick(() => console.log("I'm the 1st process.nextTick's callback"))
  queueMicrotask(callback)
  process.nextTick(() => console.log("I'm the 2nd process.nextTick's callback"))

  for (let i = 1; i < 4; i++)
    console.log(i)
}

doSomething(() => console.log("I'm an external callback"))