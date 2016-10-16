var React = require('react');
var ReactDOM = require('react-dom');
var Hover = require('./Hover');

var HoverContainer = React.createClass({
  getInitialState: function() {
    return {
      red: 255,
      green: 255,
      blue: 255
    };
  },

  handleHover: function(e) {
    var r = Math.floor(Math.random() * (256));
    var g = Math.floor(Math.random() * (256));
    var b = Math.floor(Math.random() * (256));
    this.setState({
      red: r,
      green: g,
      blue: b
    })
  },

  render: function(){
    var styles = {
      height: "100px",
      width: "100px",
      border: "1px solid black",
      backgroundColor: "rgb(" + this.state.red + "," + this.state.green + "," + this.state.blue + ")"
    }
    return (
      <Hover styles={styles} onHover={this.handleHover}/>
    )
  }
});

module.exports = HoverContainer;