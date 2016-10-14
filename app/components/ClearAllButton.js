var React = require('react');

var ClearAllButton = React.createClass({
  render: function(){
    return (
      <button onClick={this.props.clearAll}>Clear All</button>
    )
  }
});

module.exports = ClearAllButton;