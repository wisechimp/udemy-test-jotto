import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';

//Class based component because connected to redux.
export class Input extends Component {

  /**
   * Create ref for the input box.
   * @method constructor
   * @param {object} props - the component props.
   * @returns {undefined}
   */
  constructor(props) {
    super(props);
    this.inputBox = React.createRef();
    this.submitGuessedWord = this.submitGuessedWord.bind(this);
  }

  submitGuessedWord(event) {
    // don't submit form
    event.preventDefault();
    const guessedWord = this.inputBox.current.value;
    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
    };
  };

  /**
   * Render the component.
   * @method render
   * @return {JSX.Element}  - the rendered component.
   */
  render() {
    const contents = this.props.success
      ? null
      : (
        <form className="form-inline">
          <input
            data-test="input-box"
            ref={this.inputBox}
            className="mb-2 mx-sm-3"
            id="word-guess"
            type="text"
            placeholder="Enter guess" />
          <button
            data-test="submit-button"
            className="btn btn-primary mb-2"
            onClick={this.submitGuessedWord}
            type="submit">
            Submit
          </button>
        </form>
      );
    return (
      <div data-test="component-input">
        { contents }
      </div>
    )
  }
};

const mapStateToProps = ({ success }) => {
  return { success };
}

export default connect(mapStateToProps, { guessWord })(Input);
