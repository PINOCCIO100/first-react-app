import React from 'react';
import './PostBlock.css';
import PostPostedList from '../PostPostedList/PostPostedList';
import PostPoster from '../PostPoster/PostPoster';

function PostBlock() {
  return (
    <div className="post-block">
      <h1 className="post-block__title">My posts</h1>
      <PostPoster />
      <PostPostedList />
    </div>
  );
}

export default PostBlock;