var React = require('react');
var {Link, IndexLink} = require('react-router');

var authState = require('authState');

var Nav = React.createClass({
  signOut: function() {
    var {history} = this.props;
    authState.removeRefreshToken();
    history.replaceState(null, '/');
  },
  render: function() {
    return(
      <nav className="top-bar main-nav" id="responsive-menu">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Eve Mining</li>
            <li><IndexLink to="/app" activeClassName="is-active">Dashboard</IndexLink></li>
            <li><Link to="/app/inventory" activeClassName="is-active">Inventory</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li><button className="button" onClick={this.signOut}>Sign Out</button></li>
          </ul>
        </div>
      </nav>
    )
  }
});

module.exports = Nav;
