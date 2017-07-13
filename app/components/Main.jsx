var React = require('react');

var Nav = require('nav');

var OreTypeIds = require('OreTypeIds');

var Main = React.createClass({
    render: function() {
      return(
        <div>
          <Nav />
          <div className="container">
            {this.props.children}
          </div>
        </div>
      );
    }
});

module.exports = Main;
