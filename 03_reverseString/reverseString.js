const reverseString = function(string) {
    let reversed = '';
    let i = string.length - 1;
    while (i >= 0) {
        reversed += string[i];
        i--;
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
