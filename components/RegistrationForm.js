const React = require('react');

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <label>Username</label>
        <input type='text'></input>
        <br />
        <label>Password</label>
        <input type='password'></input>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

module.exports = RegistrationForm;
