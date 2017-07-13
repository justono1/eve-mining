/**
@param memberShipPoints: (int) the point value of the ship fleet memeber flew during the op
@param memberFleetTime: (int) the total time in minutes the fleet member particapated
@param totalFleetPoints: (int) the total point count of all particapting ships multipled by their time added together
@param totalHaul: (int) the total amount of isk the "haul" is worth
@param corpTax: (int) whole number representing a percentage

@return The isk amount owed
**/

var memberPayoutCalculator = (memberShipPoints, memberFleetTime, totalFleetPoints, totalHaul, corpTax) => {
  var availableHaul = Math.floor(totalHaul/(corpTax/100+1));
  var memberSharePercentage = ((memberShipPoints * memberFleetTime) / totalFleetPoints).toFixed(2);

  return availableHaul * memberSharePercentage;
};

module.exports = memberPayoutCalculator;
