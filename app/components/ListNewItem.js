var React = require('react');

var ListNewItem = React.createClass({
  addTask: function(task) {
    this.props.onAdd(task);
  },

  handleKeyPress: function(e) {
    if (e.key === 'Enter'){
      var newTask = e.target.value;
      e.target.value = "";
      this.addTask(newTask);
    }
  },

  render: function(){
    return (
      <div>
        <label>Add a new task</label>
        <input
          type="text"
          onKeyPress={this.handleKeyPress} />
      </div>
    )
  }
});

module.exports = ListNewItem;