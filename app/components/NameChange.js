var React = require('react');

var NameChange = React.createClass({
  HandleNameChange: function(e) {
    var newName = e.target.value;
    this.props.onNameChange(newName);
  },

  render: function(){
    return (
      <span>
        <h2>What is your name?</h2>
        <input className="form-control" type="text" onChange={this.HandleNameChange}/>
      </span>
    )
  }
});

module.exports = NameChange;