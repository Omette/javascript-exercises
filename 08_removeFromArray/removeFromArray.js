const removeFromArray = function(arr) {
    const args = Array.from(arguments);
    args.shift();

    let result = [];

    result = arr.filter(item => !args.includes(item));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
