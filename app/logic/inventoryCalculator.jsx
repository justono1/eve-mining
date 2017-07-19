var $ = require('jquery');
var EveCentralAPI = require('EveCentralAPI');

var inventoryCalculator = (allInventory) => {
  return new Promise((resolve, reject) => {
    if($.isArray(allInventory)) {
      var proms = [];
      allInventory.forEach((inventory) => {
        proms.push(
          EveCentralAPI.getValue(inventory)
        );
      });
      Promise.all(proms).then(values => {
        var totalPrice = 0;
        values.forEach((price) => {
          totalPrice += price;
        });
        resolve(totalPrice);
      });
    } else {
      console.error('Inventory is not an array');
      reject();
    }
  });
};

module.exports = inventoryCalculator;
