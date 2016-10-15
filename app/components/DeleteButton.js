var React = require('react');

var DeleteButton = React.createClass({
  handleDelButtonPress: function(e) {
    this.props.onClick(this.props.index);
  },

  render: function(){
    return (
      <button type="button" className="btn btn-xs btn-warning" onClick={this.handleDelButtonPress}>Delete</button>
    )
  }
});

module.exports = DeleteButton;