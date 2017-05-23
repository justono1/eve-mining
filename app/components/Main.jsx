var React = require('react');
var OreTypeIds = require('OreTypeIds');

var Main = React.createClass({
    render: function() {
      return(
        <div>
          <h2>Main Component</h2>
          {this.props.children}
        </div>
      );
    }
});

module.exports = Main;
