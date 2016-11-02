//const React = require('react');
//const ReactDOM = require('react-dom');
import React from 'react';

import ReactDOM from 'react-dom';
import RegistrationForm from './components/RegistrationForm';
import Webpage from './components/Webpage';
import FillerText from './components/FillerText';
//const RegistrationForm = require('./components/RegistrationForm');
//const Webpage = require('./components/Webpage');

ReactDOM.render(
  (
    <div className="whatEvr">
      <RegistrationForm />
      <Webpage />
    </div>
  ),
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
