import React from 'react';

import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';


function PreviousGuesses({ previousGuesses, answer }) {
  return (
    <div className="guess-results">
        { range(0, NUM_OF_GUESSES_ALLOWED).map(index => (
            <Guess 
              key={index}
              guess={previousGuesses[index]}
              answer={answer}
            />
        ))
        }
    </div>
  )
}

export default PreviousGuesses;
