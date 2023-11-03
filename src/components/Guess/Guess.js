import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';


function Guess({ guess, answer }) {
  const letterDicts = guess 
                      ? checkGuess(guess, answer)
                      : undefined; 

  return (
    <p className="guess">
        { range(0, 5).map(index => (
            <span
              key={index}
              className={"cell " 
                        + (letterDicts
                            ? letterDicts[index]["status"]
                            : ''
                )}
              >
                { letterDicts ? letterDicts[index]["letter"] : '' }
            </span>
          )
        )}
    </p>
  )
}

export default Guess;
