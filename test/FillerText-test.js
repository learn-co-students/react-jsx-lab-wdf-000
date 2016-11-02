import React from 'react';
const { shallow } = require('enzyme');
import ReactDOM from 'react-dom';
import RegistrationForm from '../components/RegistrationForm';
import Webpage from '../components/Webpage';
import FillerText from '../components/FillerText';
// const React = require('react');
// const { shallow } = require('enzyme');
//
// const FillerText = require('../components/FillerText');

describe('<FillerText />', function () {
  const wrapper = shallow(<FillerText />);

  it('should have the right tag', function () {
    expect(wrapper.type()).toEqual('p', (res) => `\`${res[1]}\` is not the right element tag.`);
  });

  it('should have the right content', function () {
    expect(wrapper.text()).toEqual('I am a filler text. I can be used to fill your screen. Amazing!');
  });
});
