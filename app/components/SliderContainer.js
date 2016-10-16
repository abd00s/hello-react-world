var React = require('react');
var ReactDOM = require('react-dom');
var Slider = require('./Slider');
var ResetButton = require('./ResetButton');

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

  handleClick: function(e) {
    this.setState({
      red: 255,
      green: 255,
      blue: 255
    })
    document.body.style.background="rgb(255,255,255)";
  },

  render: function(){
    var condition = (this.state.red !== 255 || this.state.green !== 255 || this.state.blue !== 255);
    return (
      <div className="col-xs-6">
        <h4>Change the background color! Try it out</h4>
        {condition && <ResetButton onClick={this.handleClick}/>}
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