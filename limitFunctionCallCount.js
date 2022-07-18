function limitFunctionCallCount(cb, n) {
    let count = 0;
    if (!cb || !n) {
        return null;
    }
    return function () {
        return count++ < n ? cb() : null;
    }
}

module.exports = limitFunctionCallCount