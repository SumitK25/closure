const cacheFunctionFile = require("./cacheFunction.js")

const testerFunction = (obj1, obj2) => {

    return obj1 + obj2;
}

let result = cacheFunctionFile(testerFunction);
console.log(result(2, 4));
