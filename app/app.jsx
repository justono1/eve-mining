var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Dashboard = require('Dashboard');
var Inventory = require('Inventory');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="inventory" component={Inventory} />
      <IndexRoute component={Dashboard} />
    </Route>
  </Router>,
  document.getElementById('app')
);
