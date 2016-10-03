var React = require('react');
var ReactDOM = require('react-dom');
var Slider = require('./Slider');

var SliderContainer = React.createClass({
  getInitialState: function() {
    return {
      red: 255,
      green: 255,
      blue: 255
    };
  },

  handleSlide: function(e) {
    var r = ReactDOM.findDOMNode(this.refs.red).value;
    var g = ReactDOM.findDOMNode(this.refs.green).value;
    var b = ReactDOM.findDOMNode(this.refs.blue).value;
    var backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    this.setState({
      red: r,
      green: g,
      blue: b
    })
    document.body.style.background=backgroundColor;
  },

  render: function(){
    return (
      <div>
        <h4>Change the background color! Try it out</h4>
        <p>Red</p>
        <Slider ref="red" color={this.state.red} onSlide={this.handleSlide} />
        {this.state.red}
        <br />
        <p>Green</p>
        <Slider ref="green" color={this.state.green} onSlide={this.handleSlide} />
        {this.state.green}
        <br />
        <p>Blue</p>
        <Slider ref="blue" color={this.state.blue} onSlide={this.handleSlide} />
        {this.state.blue}
      </div>
    )
  }
});

module.exports = SliderContainer;