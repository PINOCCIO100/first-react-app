import React from 'react';
import s from './PostPostedList.module.css';
import PostPosted from './PostPosted/PostPosted';

function PostPostedList(props) {
  const tID = 1;
  // const tMessage = 'Hey! Why nobody love me?'
  const tMessage = `
  Hey! Why nobody love me? Hey! Why nobody love me? Hey! Why nobody love me? 
  Hey! Why nobody love me? Hey! Why nobody love me? Hey! Why nobody love me? 
  Hey! Why nobody love me? Hey! Why nobody love me? Hey! Why nobody love me? 
  Hey! Why nobody love me? Hey! Why nobody love me? Hey! Why nobody love me? 
  Hey! Why nobody love me? Hey! Why nobody love me? Hey! Why nobody love me? 
  Hey! Why nobody love me? Hey! Why nobody love me? Hey! Why nobody love me? 
  Hey! Why nobody love me? Hey! Why nobody love me? Hey! Why nobody love me? 
  Hey! Why nobody love me? Hey! Why nobody love me? Hey! Why nobody love me? 
  Hey! Why nobody love me? Hey! Why nobody love me? Hey! Why nobody love me? 
  Hey! Why nobody love me? Hey! Why nobody love me? Hey! Why nobody love me? 
  `
  const tPostsCount = 3;

  let postedPosts = [];
  for (let i = 0; i < tPostsCount; i++) {
    const key = Math.round(Math.random() * 1000);
    postedPosts[i] = <PostPosted key={key} id={tID} message={tMessage} />;
  }
  return (
    <div className={s["post-posted-list"]}>
      {postedPosts}
    </div>
  );
}

export default PostPostedList;