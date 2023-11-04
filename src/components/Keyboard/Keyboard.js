import React from 'react';

import { KEY_ROWS } from '../../constants';
import { checkGuess } from '../../game-helpers';


function Key({ letter, status }) {
    status_str = status ? status : "";
    return (
      <div className={`key-cell ${status}`}>{ letter }</div>
    )
}


function Keyboard({previousGuesses, answer}) {
  const letterToStatusMap = new Map()

  console.log({ previousGuesses });

  previousGuesses.forEach(guess => {
    const letterDicts = checkGuess(guess, answer);

    letterDicts.forEach(letterDict => {
        letterToStatusMap.set(letterDict.letter, letterDict.status);
    })
  });

  console.log({ letterToStatusMap });

  return (
    <div className="keyboard-wrapper">
      {KEY_ROWS.map((row, row_index) => (
        <div key={row_index} className="keyboard-row">
            {row.map((letter, col_index) => (
              <Key key={col_index} letter={letter} status={letterToStatusMap.get(letter)}/>
            ))}
        </div>
      ))}
    </div>
  )
}

export default Keyboard;
