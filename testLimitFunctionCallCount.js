const limitFunctionCallCount = require("./limitFunctionCallCount.js")

function cb(){
    return true
}

let n=3

let run=limitFunctionCallCount(cb,n)
const inp=run()
console.log(inp)
