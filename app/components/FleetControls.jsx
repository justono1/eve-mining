var React = require('react');
var ReactDOM = require('react-dom');
var {connect} = require('react-redux');

var actions = require('actions');

var ESI = require('ESI');

export var FleetControls = React.createClass({
  getFleet: function(e) {
    var {dispatch} = this.props;
    e.preventDefault();
    var fleet_id = this.refs.fleet_id.value;
    if(fleet_id) {
      dispatch(actions.updateFleetID(fleet_id));
      ESI.getFleetMembers(fleet_id).then((data) => {
        dispatch(actions.addFirstMembers(data));
        data.forEach((member) => {
          ESI.getCharacterName(member.character_id).then((res) => {
            dispatch(actions.updateMember(member.character_id, {member_name: res.data.name}));
          });
          ESI.getItemName(member.ship_type_id).then((res) => {
            dispatch(actions.updateMember(member.character_id, {ship_name: res.data.name, ship_group_id: res.data.group_id}));
          });
        });
      });
    }
  },
  toggelFleetStatus: function(e) {
    var {dispatch} = this.props;
    dispatch(actions.toggleFleetStatus());
  },
  render: function() {
    var {fleet_id, fleet_status, members} = this.props;

    var renderFleetControls = () => {
      //If FleetID does not exist
      if(!fleet_id) {
        return(
          <div className="small-12 large-6 columns">
            <form onSubmit={this.getFleet}>
              <div className="input-group">
                <span className="input-group-label">FleetID</span>
                <input className="input-group-field" type="text" ref="fleet_id" />
                <div className="input-group-button">
                  <input type="submit" className="button" value="Get Fleet" />
                </div>
              </div>
            </form>
          </div>
        );
      }
      // If fleetAPI does not return members
      else if(fleet_id && members === undefined) {
        return(
          <div className="small-12 large-6 columns">
            <div className="callout alert">
              <h5>FleetID Error</h5>
              <p>Your fleetID did not return any members. Double check that your fleetID is accurate and that you are fleet boss.</p>
            </div>
            <form onSubmit={this.getFleet}>
              <div className="input-group">
                <span className="input-group-label">FleetID</span>
                <input className="input-group-field" type="text" ref="fleet_id" />
                <div className="input-group-button">
                  <input type="submit" className="button" value="Get Fleet" />
                </div>
              </div>
            </form>
          </div>
        )
      }
      // IF fleetid api call returned members
      else {
        return(
          <div>
            <div className="small-12 columns">
              <div className="success callout" ref="message" data-closable>
                <p>Clicking "Start Op" will start the mining time counter for each member in payout and assign them to their current ships. If members re-ship or new memmbers join the fleet click "refresh fleet" to get the new members or re-assign exisiting members to their new ship.</p>
                <button className="close-button" aria-label="Dismiss alert" type="button" onClick={ () => {
                  const element = ReactDOM.findDOMNode(this.refs.message)
                  $(element).fadeOut().trigger('closed.zf')
                }}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <ul className="menu">
                <li><button className={fleet_status ? "button warning" : "button success"} onClick={this.toggelFleetStatus}>{fleet_status ? "Pause Op" : "Start Op"}</button></li>
                <li><button className="button hollow">Refresh Fleet</button></li>
                <li><button className="button alert">End Op</button></li>
              </ul>
            </div>
          </div>
        );
      }
    };

    return(
      <div className="row">
        {renderFleetControls()}
      </div>
    );
  }
});

export default connect(
  (state) => {
    return {
      fleet_id: state.fleet_id,
      fleet_status: state.fleet_status,
      members: state.members
    };
  }
)(FleetControls);
