var redux = require('redux');
var {inventoryReducer, memberReducer, settingsReducer, updateFleetIDReducer, updateFleetLocationReducer, toggleFleetStatusReducer, udpateBossNameReducer, udpateBossIDReducer, updateInventoryPriceReducer} = require('reducers');

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    fleet_id: updateFleetIDReducer,
    fleet_location: updateFleetLocationReducer,
    fleet_status: toggleFleetStatusReducer,
    character_name: udpateBossNameReducer,
    character_id: udpateBossIDReducer,
    members: memberReducer,
    inventory_price: updateInventoryPriceReducer,
    inventory: inventoryReducer,
    settings: settingsReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
