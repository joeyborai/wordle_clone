import React from 'react';

import { PENDING } from '../../constants';

function GuessInput({ handleGuessSubmission, gameStatus }) {
  const [guess, setGuess] = React.useState('')

  const handle_submit = (event) => {
    event.preventDefault();

    if (guess.length != 5) {
        window.alert('Guess must be exactly 5 letters.');
        return;
    }

    handleGuessSubmission(guess);
    setGuess('');
  }

  return (
    <form 
      className='guess-input-wrapper'
      onSubmit={(event) => handle_submit(event)}
    >
        <label htmlFor='guess-input'>Enter guess:</label>
        <input
          disabled={gameStatus !== PENDING}
          required
          minLength={5}
          maxLength={5}
          id="guess-input"
          type="text"
          value={guess}
          onChange={(event) => setGuess(event.target.value.toUpperCase())}
          />
    </form>
  )
}

export default GuessInput;
