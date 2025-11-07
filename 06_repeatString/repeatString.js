const repeatString = function(string, num) {
    if(num < 0){
        return "ERROR";
    }
    let result = "";
    for (let count = 0; count < num; count++) {
        result = result + string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
