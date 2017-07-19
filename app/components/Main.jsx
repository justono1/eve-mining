var React = require('react');

var Nav = require('nav');

var authState = require('authState');
var OreTypeIds = require('OreTypeIds');

var Main = React.createClass({
  componentWillMount: function() {
    var {history} = this.props;
    if(authState.hasRefreshToken() === false) {
      history.replaceState(null, '/');
    }
  },
  render: function() {
    var {history} = this.props;
    
    return(
      <div>
        <Nav history={history} />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Main;
