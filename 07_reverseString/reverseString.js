const reverseString = function(string) {
    let result = "";
    for (const char of string) {
        result = char + result;
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
