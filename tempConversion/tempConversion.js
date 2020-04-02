const ftoc = function(cTemp) {
  var fahTemp = (cTemp - 32) * (5/9);
  var fahTempRound = Math.round(fahTemp * 10)/10;
  return fahTempRound;
}

const ctof = function(fTemp) {
  var celTemp = (fTemp * (9/5)) + 32;
  var celTempRound = Math.round(celTemp * 10)/10;
  return celTempRound;
}

module.exports = {
  ftoc,
  ctof
}
