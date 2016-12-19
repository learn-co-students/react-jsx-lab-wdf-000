const React = require('react');

class RegistrationForm extends React.Component{
  render(){
    return React.createElement('div',{},[
            React.createElement('form',{},[
              React.createElement('input',{type:'text'}),
              React.createElement('input',{type:'password'}),
              React.createElement('button',{type:'button'})
            ]);
    ]);
  }
}
module.exports = RegistrationForm;
