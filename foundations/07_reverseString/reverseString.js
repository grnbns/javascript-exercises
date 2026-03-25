const reverseString = function(string) {
    if (!string) return '';
    return string.at(-1) + reverseString(string.slice(0, -1));
};

// Do not edit below this line
module.exports = reverseString;
