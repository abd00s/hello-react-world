var React = require('react');

var ClearAllButton = React.createClass({
  render: function(){
    return (
      <button type="button" className="btn btn-xs btn-danger" onClick={this.props.clearAll}>Clear All</button>
    )
  }
});

module.exports = ClearAllButton;