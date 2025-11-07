const sumAll = function(rangeMin, rangeMax) {
    let temp;
    let result = 0;
    
    if(rangeMax < 0 || rangeMin < 0 || !(typeof rangeMax === "number") || !(typeof rangeMin === "number")){
        return "ERROR";
    }

    if(Math.floor(rangeMax) != rangeMax || Math.floor(rangeMin) != rangeMin){
        return "ERROR";
    }

    if(rangeMax < rangeMin){
        temp = rangeMax;
        rangeMax = rangeMin;
        rangeMin = temp;
    }



    for(let counter = rangeMin; counter <= rangeMax; counter++){
        result = result + counter;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
