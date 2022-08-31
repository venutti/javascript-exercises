const sumAll = function(a, b) {
    if(typeof a !== 'number' || typeof b !==  'number') {
        return 'ERROR';
    }
    if(a < 0 || b < 0) {
        return 'ERROR';
    }
    let sum = 0;

    let min, max;
    if(a < b) {
        min = a;
        max = b;
    }else{
        min = b;
        max = a;
    }

    for(let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
