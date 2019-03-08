import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';

import rootReducer from '../src/reducers';

/**
 * Creating a testing store with imported reducers, middleware and initial state.
 * globals: rootReducer.
 * @param  {onject} initialState - Initial state for the store.
 * @function storeFactory
 * @return {Store} - Redux store.
 */
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
}

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of the data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttribute = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

export const checkingProps = (component, conformingProps) => {
  const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
  expect(propError).toBeUndefined();
}
