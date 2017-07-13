var React = require('react');
var {connect} = require('react-redux');

export var Payout = React.createClass({
  render: function() {
    var {inventory} = this.props;
    return(
      <h1>Payout</h1>
    );
  }
});

export default connect()(Payout);
