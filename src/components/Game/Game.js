import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED, WIN, LOSS, PENDING } from '../../constants';
import GuessInput from '../GuessInput';
import PreviousGuesses from '../PreviousGuesses';
import Banner from '../Banner';
import Keyboard from '../Keyboard';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [previousGuesses, setPreviousGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState(PENDING);

  const handleGuessSubmission = (guess) => {
    newGuesses = [...previousGuesses, guess];
    setPreviousGuesses(newGuesses);

    if (guess === answer) {
      setGameStatus(WIN);
    } else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus(LOSS);
    } else {
      setGameStatus(PENDING);
    }
  }

  return <>
  <PreviousGuesses
    previousGuesses={previousGuesses}
    answer={answer}
  />
  <GuessInput
    handleGuessSubmission={handleGuessSubmission}
    gameStatus={gameStatus}
  />
  <Banner 
    gameStatus={gameStatus}
    numGuesses={previousGuesses.length}
    answer={answer}
  />
  <Keyboard previousGuesses={previousGuesses} answer={answer} />
  </>;
}

export default Game;
