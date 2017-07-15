var React = require('react');
var {Link, IndexLink} = require('react-router');
//
// <nav>
//   <ul className="menu">
//     <li className="menu-text">Mining Op Tracker</li>
//     <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Dashboard</IndexLink></li>
//     <li><Link to="inventory" activeStyle={{fontWeight: 'bold'}}>Inventory</Link></li>
//   </ul>
// </nav>

var Nav = React.createClass({
  render: function() {
    return(
      <nav className="top-bar" id="responsive-menu">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Eve Mining</li>
            <li><IndexLink to="/" activeClassName="is-active">Dashboard</IndexLink></li>
            <li><Link to="inventory" activeClassName="is-active">Inventory</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li><a href="/login" activeClassName="is-active">Login</a></li>
          </ul>
        </div>
      </nav>
    )
  }
});

module.exports = Nav;
