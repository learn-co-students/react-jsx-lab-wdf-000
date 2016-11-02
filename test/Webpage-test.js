import React from 'react';
const { shallow } = require('enzyme');
import ReactDOM from 'react-dom';
import RegistrationForm from '../components/RegistrationForm';
import Webpage from '../components/Webpage';
import FillerText from '../components/FillerText';
// const React = require('react');


// const FillerText = require('../components/FillerText');
// const Webpage = require('../components/Webpage');

describe('<Webpage />', function () {
  const wrapper = shallow(<Webpage />);

  it('should contain the right title', function () {
    expect(wrapper.text().includes("The world's coolest webpage")).toBeTruthy();
  });

  it('should have two instances of the `FillerText` component', function () {
    expect(wrapper.find(FillerText).length).toEqual(2);
  });
});
