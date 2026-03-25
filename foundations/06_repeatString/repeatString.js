const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    }
    let rv = '';
    for (let i = 0; i < num; i++) {
        rv += string;
    }
    return rv;
};

// Do not edit below this line
module.exports = repeatString;
