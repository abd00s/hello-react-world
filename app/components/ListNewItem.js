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
      <div className={"col-xs-6"}>
        <label>Add a new task</label>
        <input
          type="text"
          className="form-control"
          onKeyPress={this.handleKeyPress} />
      </div>
    )
  }
});

module.exports = ListNewItem;