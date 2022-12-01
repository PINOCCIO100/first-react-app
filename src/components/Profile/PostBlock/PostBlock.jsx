import React from 'react';
import s from './PostBlock.module.css';
import PostPostedList from './PostPostedList/PostPostedList';
import PostPoster from './PostPoster/PostPoster';

function PostBlock({ state }) {
  return (
    <div className={s.postBlock}>
      <h1 className={s.postBlock__title}>My posts</h1>
      <PostPoster />
      <PostPostedList state={state} />
    </div>
  );
}

export default PostBlock;