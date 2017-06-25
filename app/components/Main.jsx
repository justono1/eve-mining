var React = require('react');

var Nav = require('nav');

var OreTypeIds = require('OreTypeIds');

var Main = React.createClass({
    render: function() {
      return(
        <div>
          <Nav />
          <h2>Main Component</h2>
          {this.props.children}
        </div>
      );
    }
});

module.exports = Main;
