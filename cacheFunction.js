function cacheFunction(cb) {
    let cachedData = {}
    return function ()
    {
        let args = Array.prototype.slice.call(arguments)
        if (args in cachedData) {
            console.log("Cached Data")
            return cachedData[args]
        } else {
            return (cachedData[args] = cb.apply(this, args));
        }
    }
}
module.exports = cacheFunction