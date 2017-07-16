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
  toggleStatus: function() {
    var {dispatch, character_id, in_payout} = this.props;
    dispatch(actions.updateMember(character_id, {in_payout: !in_payout}));
  },
  render: function() {
    var {dispatch, ship_name, member_name, mining_time, in_payout} = this.props;
    return(
      <tr>
        <td>{member_name ? member_name : 'loading...'}</td>
        <td>{ship_name ? ship_name : 'loading...'}</td>
        <td>{mining_time}</td>
        <td>
          <button onClick={this.toggleStatus} className={in_payout ? 'button alert' : 'button success'}>
            {in_payout ? 'Remove Pay' : 'Add Pay'}
          </button>
        </td>
      </tr>
    );
  }
});

export default connect()(Member);
