import { React, useState } from 'react';
import s from './PostBlock.module.css';
import PostPostedList from './PostPostedList/PostPostedList';
import PostPoster from './PostPoster/PostPoster';

function PostBlock({ state, actions }) {
  const { usersPostPosterText, currentUserID } = state;
  const stateTo_PostPoster = { usersPostPosterText, currentUserID };

  const [trigger, setTrigger] = useState(false);
  const addPost = (message) => {
    actions.createPost(message);
    // setTrigger((prev) => !prev);  // для реренедера PostPostedList
  };
  return (
    <div className={s.postBlock}>
      <h1 className={s.postBlock__title}>My posts</h1>
      <PostPoster addPost={addPost} state={stateTo_PostPoster} />
      <PostPostedList state={state} trigger={trigger} />
    </div>
  );
}

export default PostBlock;