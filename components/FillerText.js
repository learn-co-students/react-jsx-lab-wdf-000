const React = require('react');

class FillerText extends React.Component{
  render(){
    return React.createElement('div',{},[
            React.createElement('p',{},'I am a filler text. I can be used to fill your screen. Amazing!')
    ]);
  }
}
module.exports = FillerText;
