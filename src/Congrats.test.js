import React from 'react';
import { shallow } from 'enzyme';

import Congrats from './Congrats';
import { findByTestAttribute, checkingProps } from '../test/testUtils';

const defaultProps = { success: false };

/**
 * Common function to create a ShallowWrapper for the Congrats component
 * @function setup
 * @param  {Object} [props={}] Component props specific to this setup.
 * @return {ShallowWrapper}
 */
const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />)
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

test('does not throw warning with expected props', () => {
  checkingProps(Congrats, defaultProps);
});
