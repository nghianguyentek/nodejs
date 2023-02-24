function doSomething(callback) {
  setImmediate(() => console.log("I'm the 1st setImmediate's callback"))
  setTimeout(() => console.log("I'm a setTimeout's callback"))
  setImmediate(() => console.log("I'm the 2st setImmediate's callback"))
  process.nextTick(() => console.log("I'm the 1st process.nextTick's callback"))
  queueMicrotask(callback)
  process.nextTick(() => console.log("I'm the 2nd process.nextTick's callback"))
  
  for (let i = 1; i < 4; i++)
    console.log(i)
}

doSomething(() => console.log("I'm an external callback"))