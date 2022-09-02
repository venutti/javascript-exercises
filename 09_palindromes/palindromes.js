const palindromes = function (string) {
    const arrAlpha = string.toLowerCase().split("").filter(word => word.match(/[a-z]/));
    const reversed  = [...arrAlpha];
    reversed.reverse();
    return arrAlpha.join("") === reversed.join("");
};

// Do not edit below this line
module.exports = palindromes;
