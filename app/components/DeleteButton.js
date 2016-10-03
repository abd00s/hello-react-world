var React = require('react');

var DeleteButton = React.createClass({
  handleDelButtonPress: function(e) {
    this.props.onClick(this.props.index);
  },

  render: function(){
    return (
      <button onClick={this.handleDelButtonPress}>Delete</button>
    )
  }
});

module.exports = DeleteButton;