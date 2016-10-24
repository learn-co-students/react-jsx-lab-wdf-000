const React = require('react');
const FillerText = require('./FillerText');

class Webpage  extends React.Component {
  render() {
    return(
      <div>
        <p>The world's coolest webpage</p>
        <FillerText />
        <FillerText />
      </div>
    )
  }
}

module.exports = Webpage;
