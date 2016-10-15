var React = require('react');
var Header = require('./Header');
var GreetingContainer = require('./GreetingContainer');
var ListContainer = require('./ListContainer');
var SliderContainer = require('./SliderContainer');
var ReactBootstrap = require('react-bootstrap');
Col = ReactBootstrap.Col;
Row = ReactBootstrap.Row;
Jumbotron = ReactBootstrap.Jumbotron;
Panel = ReactBootstrap.Panel;

var App = React.createClass({
  render: function(){
    return (
      <Col xs={8} xsOffset={2}>
        <Jumbotron>
          <h1>React JS Showcase!</h1>
          <p>Front end is not so bad</p>
        </Jumbotron>
        <Header />
        <Panel header="Live input">
          <GreetingContainer />
        </Panel>
        <Panel header="To Do List [Add, Remove, Search]">
          <ListContainer />
        </Panel>
        <Panel header="Live Color Manipulation">
          <SliderContainer />
        </Panel>
      </Col>
    )
  }
});

module.exports = App;