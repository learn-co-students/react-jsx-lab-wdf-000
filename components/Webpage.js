const React = require('react');

const FillerText = require('./FillerText');

class WebPage extends React.Component {
  render() {
    return (
      <div>
      <title>The world's coolest webpage</title>
      <FillerText />
      <FillerText />
      </div>
    )
  }
}




module.exports = WebPage
