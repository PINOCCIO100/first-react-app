import { React, useState } from 'react';
import s from './PostBlock.module.css';
import PostPostedList from './PostPostedList/PostPostedList';
import PostPoster from './PostPoster/PostPoster';
import PostPosted from './PostPostedList/PostPosted/PostPosted';
 

function PostBlock({ state, actions }) {
  const { usersPostPosterText, currentUserID, usersPosts, usersProfileInfo } = state;
  const stateTo_PostPoster = { usersPostPosterText, currentUserID };

  const stateOfPostsList = () => (usersPosts.list[currentUserID.id]
    .map((post) => {
      return (<PostPosted
        key={post.messageID}
        post={post}
        photo={usersProfileInfo.list[post.userID].photo}
      />)
    }));

  const [postedPosts, setPostedPosts] = useState(stateOfPostsList());
  const addPost = (message) => {
    actions.createPost(message);
    setPostedPosts(stateOfPostsList());
  };
  return (
    <div className={s.postBlock}>
      <h1 className={s.postBlock__title}>My posts</h1>
      <PostPoster addPost={addPost} state={stateTo_PostPoster} />
      <PostPostedList state={state} postedPosts={postedPosts} />
    </div>
  );
}

export default PostBlock;