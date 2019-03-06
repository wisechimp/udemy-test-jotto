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
  const wrapper = setup();
  const component = findByTestAttribute(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('renders no text when the `success` prop is false', () => {
  const wrapper = setup();
  const component = findByTestAttribute(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test('renders non-empty congrats message when `success` prop is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttribute(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});
