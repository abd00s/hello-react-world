var React = require('react');
var Header = require('./Header');
var GreetingContainer = require('./GreetingContainer');
var ListContainer = require('./ListContainer');
var SliderContainer = require('./SliderContainer');

var App = React.createClass({
  render: function(){
    return (
      <div>
        <Header />
        <GreetingContainer />
        <ListContainer />
        <SliderContainer />
      </div>
    )
  }
});

module.exports = App;