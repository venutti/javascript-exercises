const round = function(number, decimals) {
  return Math.round((number + Number.EPSILON) * (10 ** decimals)) / (10 ** decimals);
};

const ftoc = function(far) {
  let celsuis = (far - 32) * 5 / 9;
  return round(celsuis, 1);
};

const ctof = function(celsius) {
  let far = (celsius * 9 / 5) + 32;
  return round(far, 1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
