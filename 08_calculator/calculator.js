const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum,elem) => sum+=elem, 0);
};

const multiply = function(array) {
  return array.reduce((prod, elem) => prod *= elem, 1);
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(n) {
	let prod = 1;
  for(let i = 1; i <= n; i++) {
    prod *= i;
  }
  return prod;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
