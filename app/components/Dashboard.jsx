var React = require('react');

var ESI = require('ESI');

var Dashboard = React.createClass({
  getFleet: function() {
    ESI.getFleetMembers(1097211349923);
  },
  render: function() {
    return(
      <div>
        <h2>Dashboard Component</h2>
        <button onClick={this.getFleet}>Log Fleet</button>
      </div>
    );
  }
});

module.exports = Dashboard;
