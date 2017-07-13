var React = require('react');
var {connect} = require('react-redux');

var actions = require('actions');

var InventoryAPI = require('InventoryAPI');

export var Ore = React.createClass({
  updateUnits: function() {
    var {typeID, dispatch} = this.props;
    var units = parseInt(this.refs.units.value);
    dispatch(actions.updateInventory(typeID, units));
  },
  render: function() {
    var {typeID, units, dispatch} = this.props;
    return(
      <div className="column column-block">
        <h6>{InventoryAPI.getOreName(typeID)[0].name}</h6>
        <input type="text" placeholder="units" ref="units" value={units} onChange={this.updateUnits} />
      </div>
    );
  }
});

export default connect()(Ore);
