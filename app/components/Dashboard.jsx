var React = require('react');
var EveCentral = require('EveCentral');

var Dashboard = React.createClass({
    runfunction: function() {
      EveCentral.getPrice(22, 'buy').then(function(data) {
        console.log(data);
      }, function(err) {
        console.error(err);
      });
    },
    render: function() {
      return(
        <div>
          <h2>Dashboard Component</h2>
          <button onClick={this.runfunction}>Get Arkonor Price Data</button>
        </div>
      );
    }
});

module.exports = Dashboard;
