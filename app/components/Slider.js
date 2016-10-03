var React = require('react');
var ReactDOM = require('react-dom');

var Slider = React.createClass({

  render: function(){
    return (
      <input type="range"
        min="0"
        max="255"
        value={this.props.color}
        onChange={this.props.onSlide}/>
    )
  }
});

module.exports = Slider;