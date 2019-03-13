import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from '../test/testUtils';
import ConnectedApp, { App } from './App';

const setup = (state={}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<ConnectedApp store={store} />).dive();
  return wrapper;
}

describe('redux properties', () => {
  test('has access to success state', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('has access to secretWord state', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  test('has access to guessedWords state', () => {
    const guessedWords = [{ guessWord: 'train', letterMatchCount: 3}];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords)
  });
  test('getSecretWord action creator is afunction on the props', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

test('getSecretWord runs on App mount',() => {
  const getSecretWordMock = jest.fn();
  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: [],
  }

  //set up the app with getSecretWordMock as the getSecretWord prop
  const wrapper = shallow(<App {...props} />);

  // run lifecycle method
  wrapper.instance().componentDidMount();

  //check to see the mock ran
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);
})
