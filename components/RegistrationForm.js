//const React = require('react');
import React from 'react';
class RegistrationForm extends React.Component {
  render() {
    return (
      <form id="registration">
        <input type="text"/>Text here
        <input type="password"/>Password here
        <button type="submit">Click this!</button>
      </form>
    );
  }
}

export default RegistrationForm
