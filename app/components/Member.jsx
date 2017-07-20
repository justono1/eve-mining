var React = require('react');
var {connect} = require('react-redux');

var actions = require('actions');
var ESI = require('ESI');

// PROPS
// character_id: 1313639888,
// join_time: "2017-07-15T01:39:18Z",
// role: "squad_member",
// role_name: "Squad Member",
// ship_type_id: 1944,
// solar_system_id: 30002609,
// squad_id: 3249211350054,
// takes_fleet_warp: true,
// wing_id: 2146111350054

export var Member = React.createClass({
  togglePayStatus: function() {
    var {dispatch, character_id, in_payout} = this.props;
    dispatch(actions.updateMember(character_id, {in_payout: !in_payout}));
  },
  toggleTimeStatus: function() {
    var {dispatch, character_id, mining_now} = this.props;
    if(mining_now === undefined) {
      dispatch(actions.updateMember(character_id, {mining_now: true}));
    } else {
      dispatch(actions.updateMember(character_id, {mining_now: !mining_now}));
    }
  },
  formatSeconds: function(totalSeconds) {
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds / 60);

    if(seconds < 10) {
      seconds = `0${seconds}`;
    }

    if(minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${minutes}:${seconds}`;
  },
  render: function() {
    var {dispatch, ship_name, member_name, mining_time, mining_now, in_payout, fleet_status} = this.props;

    var renderSingleMemberPause = () => {
      if(fleet_status) {
        if(mining_now === undefined || mining_now === false) {
          return(
            <button onClick={this.toggleTimeStatus} className="button success">Start Timer</button>
          );
        } else {
          return(
            <button onClick={this.toggleTimeStatus} className="button warning">Pause Timer</button>
          )
        }
      }
    }

    return(
      <tr className="member__row">
        <td>{member_name ? member_name : 'loading...'}</td>
        <td>{ship_name ? ship_name : 'loading...'}</td>
        <td>{this.formatSeconds(mining_time)}</td>
        <td>
          <button onClick={this.togglePayStatus} className={in_payout ? 'button alert' : 'button success'}>
            {in_payout ? 'Remove Pay' : 'Add Pay'}
          </button>
          {renderSingleMemberPause()}
        </td>
      </tr>
    );
  }
});

export default connect(
  (state) => {
    return {
      fleet_status: state.fleet_status
    }
  }
)(Member);
