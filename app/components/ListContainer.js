var React = require('react');
var ListNewItem = require('./ListNewItem');
var DisplayListItems = require('./DisplayListItems');
var SearchItems = require('./SearchItems');
var ClearAllButton = require('./ClearAllButton');
var _ = require('lodash');

var ListContainer = React.createClass({
  getInitialState: function() {
    return {
      listItems: [],
      query: ""
    };
  }.bind(this),

  addNewItem: function(newTask) {
    var itemCount;
    if (this.state.listItems.length === 0) {
      itemCount = 1;
    }else{
      var arrayLength = this.state.listItems.length;
      itemCount = this.state.listItems[arrayLength - 1]["id"] + 1;
    }
    var itemObject = {
      task: newTask,
      id: itemCount
    }
    this.setState({
      listItems: this.state.listItems.concat(itemObject)
    });
  },

  removeItem: function(index) {
    var array = this.state.listItems;
    array = _.reject(array, function(o){return o["id"]==index;})
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
      return item["task"].indexOf(query) !== -1
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