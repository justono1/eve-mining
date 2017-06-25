var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function() {
    return(
      <nav className="menu-centered">
        <ul className="menu">
          <li class="menu-text">Mining Op Tracker</li>
          <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Dashboard</IndexLink></li>
          <li><Link to="inventory" activeStyle={{fontWeight: 'bold'}}>Inventory</Link></li>
        </ul>
      </nav>
    )
  }
});

module.exports = Nav;
