
const removeFromArray = function(array, ...elemRemove) {
    const newArray = [];
    for(const element of array) {
        if(!elemRemove.includes(element)) {
            newArray.push(element);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
