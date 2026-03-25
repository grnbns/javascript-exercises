const removeFromArray = function(arr, ...rest) {
    let rv = arr;
    for (const item of rest) {
        rv = rv.filter(elem => elem != rest);
    }
    return rv;
};

// Do not edit below this line
module.exports = removeFromArray;
