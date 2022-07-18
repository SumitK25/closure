function counterFactory() {
    let val = 0
    let incre = 0
    let decre = 0
    const run = {
        increament() {
            incre = val++
            return incre
        },
        decreament() {
            decre = val--
            return decre
        }
    }
    return run
}
module.exports = counterFactory