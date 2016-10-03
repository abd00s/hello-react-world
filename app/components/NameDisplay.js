var React = require('react');

var NameDisplay = React.createClass({
  render: function(){
    return (
      <h2> Hi {this.props.name}, what do you want to do? </h2>
    )
  }
});

module.exports = NameDisplay;