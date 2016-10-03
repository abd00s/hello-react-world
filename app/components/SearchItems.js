var React = require('react');

var SearchItems = React.createClass({
  handleSearch: function(e) {
    var query = e.target.value;
    this.props.onSearch(query);
  },

  render: function(){
    return (
      <div>
        <label>Search Items</label>
        <input
          type="text"
          onChange={this.handleSearch} />
      </div>
    )
  }
});

module.exports = SearchItems;