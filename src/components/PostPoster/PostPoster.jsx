import React from 'react';
import './PostPoster.css';

function PostPoster(props) {
  return (
    <div className="post-poster">
      <textarea
        maxLength={256}
        className="post-poster__text-area"
        name="post-poster__text-area"
        placeholder='Your news...'
      />
      <div className="post-poster__button-area">
        <button className="post-poster__button">Send</button>
      </div>
    </div>
  );
}

export default PostPoster;