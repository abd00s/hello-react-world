var React = require('react');

var SearchItems = React.createClass({
  handleSearch: function(e) {
    var query = e.target.value;
    this.props.onSearch(query);
  },

  render: function(){
    return (
      <div className={"col-xs-6"}>
        <label>Search Items</label>
        <input
          className="form-control"
          type="text"
          onChange={this.handleSearch} />
      </div>
    )
  }
});

module.exports = SearchItems;