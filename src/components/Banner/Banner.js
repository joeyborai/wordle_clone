import React from 'react';

import { WIN, LOSS, PENDING } from '../../constants';


function Banner({ gameStatus, numGuesses, answer }) {
  if (gameStatus === WIN) {
    return (
        <div class="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {numGuesses} guesses</strong>.
          </p>
        </div>
    )
  } else if (gameStatus === LOSS) {
    return (
        <div class="sad banner">
          <p>Sorry, the correct answer is <strong>{ answer }</strong>.</p>
        </div>
    )
  } else {
    return (<></>)
  }
}

export default Banner;
