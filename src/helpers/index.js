/**
 * @method getLetterMatchCount
 * @param  {string} guessedWord - The guess made by the user
 * @param  {string} secretWord - The randomly generated secret word
 * @return {number} - The number of letters that match
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessedWord.split(''));
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length;
};
