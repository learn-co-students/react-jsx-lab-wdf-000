const React = require('react');
const FillerText = require('./FillerText');
class Webpage extends React.Component {
  render() {
    return (
      <div class="test">
     <title>The world's coolest webpage</title>
     <FillerText />
     <FillerText />
     </div>
    )
  }
}

module.exports = Webpage
