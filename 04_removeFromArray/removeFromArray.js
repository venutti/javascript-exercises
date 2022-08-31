const getIndex = function(array, element) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === element) {
            return i;
        }
    }
};

const removeFromArray = function(array, ...elemRemove) {
    for(const element of elemRemove) {
        let i = getIndex(array, element);
        if(i === undefined) {
            continue;
        }
        array.splice(i, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
