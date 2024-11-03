const convertToCelsius = function(dgree) {
  let cdgree = (dgree-32)*(5/9);
  let rounded = parseFloat(cdgree.toFixed(1));
  return rounded;

};

const convertToFahrenheit = function(dgree) {
  let fdgree = dgree * (9/5)+32 ;
  let rounded = parseFloat(fdgree.toFixed(1));
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
