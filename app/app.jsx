var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var InventoryAPI = require('InventoryAPI');

var actions = require('actions');
var store = require('configureStore').configure();

var Main = require('Main');
var Marketing = require('Marketing');

import Dashboard from 'Dashboard';
import Inventory from 'Inventory';

store.subscribe(() => {
  var state = store.getState();

  InventoryAPI.setInventory(state.inventory);

  console.log('New state', state);
});
// 1118511350054

//Initialize State
var initalInventory = InventoryAPI.getInventory();
store.dispatch(actions.addAllInventory(initalInventory));


// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Marketing} />
      <Route path="/app" component={Main}>
        <Route path="inventory" component={Inventory} />
        <IndexRoute component={Dashboard} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
