var React = require('react');
var DeleteButton = require('./DeleteButton');

var DisplayListItems = React.createClass({
  render: function(){
    var props = this.props;
    return (
      <ul>
        {this.props.tasks.map(function(item, i){
          return <span key={"item_" + i}>
            <li>
              {item["task"]}
              <DeleteButton onClick={props.onDelete} index={item["id"]-1}/>
            </li>
          </span>;
        })}
      </ul>
    )
  }
});

module.exports = DisplayListItems;