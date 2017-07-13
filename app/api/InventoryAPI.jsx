var $ = require('jquery');

var OreTypeIds = require('OreTypeIds');

module.exports = {
  setInventory: function(inventory) {
    if ($.isArray(inventory)) {
      localStorage.setItem('inventory', JSON.stringify(inventory));
      return inventory;
    }
  },
  getInventory: function() {
    var stringInventory = localStorage.getItem('inventory');
    var inventory = [];

    try {
      inventory = JSON.parse(stringInventory);
    } catch (e) {

    }

    return $.isArray(inventory) ? inventory : [];
  },
  getOre: function() {
    return OreTypeIds;
  },
  getOreName: function(typeID) {
    return OreTypeIds.filter((ore) => {
      return typeID === ore.typeID;
    });
  }
}
