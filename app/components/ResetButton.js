var React = require('react');

var ResetButton = React.createClass({
  render: function(){
    return (
      <button type="button" className="btn btn-xs btn-primary" onClick={this.props.onClick}>
        Reset
      </button>
    )
  }
});

module.exports = ResetButton;