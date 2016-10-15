var React = require('react');
var ListNewItem = require('./ListNewItem');
var DisplayListItems = require('./DisplayListItems');
var SearchItems = require('./SearchItems');
var ClearAllButton = require('./ClearAllButton');

var ListContainer = React.createClass({
  getInitialState: function() {
    return {
      listItems: [],
      query: ""
    };
  }.bind(this),

  addNewItem: function(newTask) {
    this.setState({
      listItems: this.state.listItems.concat([newTask])
    });
  },

  removeItem: function(index) {
    var array = this.state.listItems;
    array.splice(index, 1)
    this.setState({
      listItems: array
    });
  },

  clearItems: function() {
    this.setState({
      listItems: []
    });
  },

  filterItems: function(text) {
    this.setState({
      query: text
    })
  },

  render: function(){
    var query = this.state.query;
    var toDisplay = this.state.listItems.filter(function(item){
      return item.indexOf(query) !== -1
    });
    var condition = (toDisplay.length != 0);
    return (
      <div>
        <ListNewItem
          onAdd={this.addNewItem} />
        <br />
        <br />
        <SearchItems
          onSearch={this.filterItems} />
        {condition && <ClearAllButton
          clearAll={this.clearItems} />}
        <DisplayListItems
          tasks={toDisplay}
          onDelete={this.removeItem} />
      </div>
    )
  }
});

module.exports = ListContainer;