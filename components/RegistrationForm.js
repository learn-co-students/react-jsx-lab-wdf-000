const React = require('react');
 
class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <label>id</label>
        <input type="text" />
        <label>password</label>
        <input type="password" />
        <button type="submit">Register</button>
      </form>
    );
  }
}
module.exports = RegistrationForm;
