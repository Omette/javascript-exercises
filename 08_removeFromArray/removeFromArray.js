const removeFromArray = function(arr) {
    const args = Array.from(arguments);
    args.shift();

    let result = [];

    for (const arg of args) {
        let index = arr.indexOf(arg);
        while (index != -1) {
            arr.splice(index, 1);
            index = arr.indexOf(arg, index);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
