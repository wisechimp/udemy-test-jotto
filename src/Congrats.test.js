import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from './Congrats';
import { findByTestAttribute } from '../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Common function to create a ShallowWrapper for the Congrats component
 * @function setup
 * @param  {Object} [props={}] Component propr specific to this setup.
 * @return {ShallowWrapper}
 */
const setup = (props={}) => {
  return shallow(<Congrats {...props} />)
}

test('renders without error', () => {

});

test('renders no text when the `success` prop is false', () => {

});

test('renders non-empty congrats message when `success` prop is true', () => {

});
