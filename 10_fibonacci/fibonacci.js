const fibonacci = function(number) {
    number = +number;
    if ( number <= 0) {
        return "OOPS";
    }
    if ( number === 1 || number === 2 ) {
        return 1;
    }
    return fibonacci( number - 1 ) + fibonacci( number - 2 );
};

// Do not edit below this line
module.exports = fibonacci;
