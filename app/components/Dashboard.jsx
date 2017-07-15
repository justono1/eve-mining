var React = require('react');
var cookie = require('react-cookies');

var ESI = require('ESI');

var Dashboard = React.createClass({
  getFleet: function(e) {
    e.preventDefault();
    var fleetID = this.refs.fleetID.value;
    if(fleetID) {
      ESI.getFleetMembers(fleetID);
    }
  },
  render: function() {
    console.log(cookie.load('access_token'));
    return(
      <div>
        <h2>Dashboard Component</h2>
        <form onSubmit={this.getFleet}>
          <div className="input-group">
            <span className="input-group-label">FleetID</span>
            <input className="input-group-field" type="text" ref="fleetID" />
            <div className="input-group-button">
              <input type="submit" className="button" value="Get Fleet" />
            </div>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = Dashboard;
