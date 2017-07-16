var React = require('react');
var {connect} = require('react-redux');

var actions = require('actions');
var ESI = require('ESI');

import Member from 'Member';
import FleetControls from 'FleetControls';

export var Dashboard = React.createClass({
  render: function() {
    var {members, dispatch} = this.props;

    var renderPaidFleetMembers = () => {
      return members.map((member) => {
        if(member.in_payout === true) {
          return(
            <Member key={member.character_id} {...member} />
          );
        }
      });
    };

    var renderUnpaidFleetMembers = () => {
      return members.map((member) => {
        if(member.in_payout === false) {
          return(
            <Member key={member.character_id} {...member} />
          );
        }
      });
    };

    return(
      <div>
        <br />
        <br />
        <FleetControls />
        <br />
        <div className="row">
          <div className="small-12 columns">
            <h4>Paid Members</h4>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Ship</th>
                  <th>Mining Time</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {renderPaidFleetMembers()}
              </tbody>
            </table>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="small-12 columns">
            <h4>Un-paid Members</h4>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Ship</th>
                  <th>Mining Time</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {renderUnpaidFleetMembers()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
});

export default connect(
  (state) => {
    return {
      members: state.members
    }
  }
)(Dashboard);
