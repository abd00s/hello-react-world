var React = require('react');
var NameDisplay = require('./NameDisplay');
var NameChange = require('./NameChange');

var GreetingContainer = React.createClass({
  getInitialState: function(){
    return {
      name: "Guest"
    }
  },

  changeName: function(newName){
    this.setState({
      name: newName
    });
  },

  render: function(){
    return (
      <div>
        <NameChange onNameChange={this.changeName} />
        <NameDisplay name={this.state.name} />
      </div>
    )
  }
});

module.exports = GreetingContainer;