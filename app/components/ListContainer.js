var React = require('react');
var ListNewItem = require('./ListNewItem');
var DisplayListItems = require('./DisplayListItems');
var SearchItems = require('./SearchItems');

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

  filterItems: function(text) {
    this.setState({
      query: text
    })
  },

  render: function(){
    var toDisplay = [];
    var allItems = this.state.listItems;
    var query = this.state.query;
    allItems.forEach(function(item){
      if (item.indexOf(query) === 0) {
        toDisplay.push(item)
      }
    });
    return (
      <div>
        <ListNewItem
          onAdd={this.addNewItem} />
        <br />
        <br />
        <SearchItems
          onSearch={this.filterItems} />
        <DisplayListItems
          tasks={toDisplay}
          onDelete={this.removeItem} />
      </div>
    )
  }
});

module.exports = ListContainer;