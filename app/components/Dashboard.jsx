var React = require('react');
var {Cookies} = require('react-cookie');

var ESI = require('ESI');

var Dashboard = React.createClass({
  getFleet: function() {
    ESI.getFleetMembers(1097211349923);
  },
  render: function() {
    console.log(Cookies.get('request_token'));
    return(
      <div>
        <h2>Dashboard Component</h2>
        <button onClick={this.getFleet}>Log Fleet Stuff</button>
      </div>
    );
  }
});

module.exports = Dashboard;
