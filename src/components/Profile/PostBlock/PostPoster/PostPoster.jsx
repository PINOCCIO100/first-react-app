import React from 'react';
import s from './PostPoster.module.css';

function PostPoster(props) {
  return (
    <div className={s["post-poster"]}>
      <textarea
        maxLength={256}
        className={s["post-poster__text-area"]}
        name="post-poster__text-area"
        placeholder='Your news...'
      />
      <div className={s["post-poster__button-area"]}>
        <button className={s["post-poster__button"]}>Send</button>
      </div>
    </div>
  );
}

export default PostPoster;