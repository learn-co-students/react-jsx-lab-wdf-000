const React = require('react');

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text"></input>
        <input type="password"></input>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

module.exports = RegistrationForm;
