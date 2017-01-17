const React = require('react');

// ES2015 React component
class RegistrationForm extends React.Component {
  render () {
    return (
      <form >
        <input type="text" />
        <input type="password" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

module.exports = RegistrationForm;

