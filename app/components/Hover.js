var React = require('react');


var Hover = React.createClass({

  render: function(){
    return (
      <div
        style={this.props.styles}
        onMouseMove={this.props.onHover}>
      </div>
    )
  }
});

module.exports = Hover;