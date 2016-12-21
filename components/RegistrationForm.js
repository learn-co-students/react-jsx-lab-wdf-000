const React = require('react');

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
      <input type="text"/>
      <input type="password"/>
      <button type="submit">CLICK ME</button>
      </form>
    )
  }
}


module.exports = RegistrationForm
