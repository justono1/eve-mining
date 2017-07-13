var React = require('react');
var {connect} = require('react-redux');

var actions = require('actions');
var InventoryAPI = require('InventoryAPI');
var inventoryCalculator = require('inventoryCalculator');

import Ore from 'Ore';
import Payout from 'Payout';

export var Inventory = React.createClass({
  addInventoryItem: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var inventoryItemID = this.refs.inventoryItem.value
    dispatch(actions.addInventory(parseInt(inventoryItemID)));
  },
  calculateInventoryValue: function() {
    var {inventory, dispatch} = this.props;
    inventoryCalculator(inventory).then((res) => {
      dispatch(actions.updateInventoryPrice(res));
    });
  },
  render: function() {
    var {inventory, inventoryPrice, dispatch} = this.props;

    var renderOreTypes = () => {
      return InventoryAPI.getOre().map((ore) => {
        return (
          <option key={ore.typeID} value={ore.typeID}>{ore.name}</option>
        );
      });
    }

    var renderInventory = () => {
      return inventory.map((ore) => {
        return(
          <Ore key={ore.typeID} {...ore} />
        );
      });
    }

    var renderAmount = () => {
      if(inventoryPrice) {
        return(
          <p>isk {Math.floor(inventoryPrice).toLocaleString()}</p>
        );
      }
    }

    return(
      <div>
        <div className="row item-selector">
          <form onSubmit={this.addInventoryItem}>
            <div className="input-group">
              <label>Select Ore To Add
                <select ref="inventoryItem">
                  {renderOreTypes()}
                </select>
              </label>
              <div className="input-group-button">
                <button className="button">Add</button>
              </div>
            </div>
          </form>
        </div>
        <hr />
        <div className="row small-up-2 medium-up-3 large-up-4 inventory-items">
          {renderInventory()}
        </div>
        <div className="row">
          <div className="medium-6 columns">
            <Payout inventory={inventory} />
          </div>
          <div className="medium-6 columns">
            <button className="button" onClick={this.calculateInventoryValue}>Calulate Inventory</button>
            {renderAmount()}
          </div>
        </div>
      </div>
    );
  }
});

export default connect(
  (state) => {
    return {
      inventoryPrice: state.inventoryPrice,
      inventory: state.inventory
    }
  }
)(Inventory);
