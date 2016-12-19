const React = require('react');
const FillerText = require('./FillerText');

class Webpage extends React.Component{
  render(){
    return React.createElement('div',{},[
            React.createElement('title',{},"The world's coolest webpage"),
            React.createElement(FillerText),
            React.createElement(FillerText)
    ])
  }
}
module.exports = Webpage;
