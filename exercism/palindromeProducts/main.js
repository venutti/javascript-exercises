function isPalindrome(number) {
    return number.toString().split("").reverse().join("") === number.toString();
}

function isProductPalindrome(number1, number2) {
    return isPalindrome(number1*number2);
}

function getCardinalProduct(array) {
    const cardinal = [];
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            cardinal.push([array[i], array[j]]);
        }
    }
    return cardinal;
}

function getCompleteArray(init, end) {
    const array = [];
    for(let i = init; i <= end; i++) {
        array.push(i);
    }
    return array;
}

function productPalindromes(init, end) {
    const palindromes = {};
    const cardinal = getCardinalProduct(getCompleteArray(init, end));

    cardinal.forEach(numbers => {
        if (isProductPalindrome(numbers[0], numbers[1])) {
            let prod = numbers[0] * numbers[1];
            if (!palindromes[prod]) {
                palindromes[prod] = []
            }
            palindromes[prod].push([numbers[0], numbers[1]]);
        }
    })

    return palindromes;
}

console.log(productPalindromes(1,9));
