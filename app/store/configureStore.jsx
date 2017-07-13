var redux = require('redux');
var {inventoryReducer, memberReducer, settingsReducer, updateFleetIDReducer, updateFleetLocationReducer, toggleFleetStatusReducer, udpateBossNameReducer, udpateBossIDReducer, updateInventoryPriceReducer} = require('reducers');

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    fleetID: updateFleetIDReducer,
    fleetLocation: updateFleetLocationReducer,
    fleetStatus: toggleFleetStatusReducer,
    characterName: udpateBossNameReducer,
    characterID: udpateBossIDReducer,
    members: memberReducer,
    inventoryPrice: updateInventoryPriceReducer,
    inventory: inventoryReducer,
    settings: settingsReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
