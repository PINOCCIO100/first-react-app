import React, { useState } from 'react';
import s from './ButtonRating.module.css';

function ButtonRating({ like, dislike }) {
  let ratingType, tVotes;
  if (like !== undefined) {
    ratingType = s.btnLike
    tVotes = like;
  } else {
    ratingType = s.btnDislike;
    tVotes = dislike;
  }

  let [votes, setVotes] = useState(tVotes);

  return (
    <div className={s.ButtonRating}>
      <button
        onClick={(() => setVotes(votes + 1))}
        className={ratingType}>
        {(like !== undefined ? "Like" : "Dislike")}{votes > 0 ? <span>{votes}</span> : ""}</button>
    </div>
  );
}


export default ButtonRating;