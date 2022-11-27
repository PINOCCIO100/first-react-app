import React from 'react';
import s from './PostBlock.module.css';
import PostPostedList from './PostPostedList/PostPostedList';
import PostPoster from './PostPoster/PostPoster';

function PostBlock() {
  return (
    <div className={s["post-block"]}>
      <h1 className={s["post-block__title"]}>My posts</h1>
      <PostPoster />
      <PostPostedList />
    </div>
  );
}

export default PostBlock;