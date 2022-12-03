import { React, useState } from 'react';
import s from './PostBlock.module.css';
// TODO как-то убрать импорты
import { addPostActionCreator } from '../../../dataBase/state';

import PostPostedList from './PostPostedList/PostPostedList';
import PostPoster from './PostPoster/PostPoster';
import PostPosted from './PostPostedList/PostPosted/PostPosted';

function PostBlock({ store }) {
  const { usersPostPosterText, currentUserID, usersPosts, usersProfileInfo } = store.state;
  const storeTo_PostPoster = {};
  storeTo_PostPoster.state = { usersPostPosterText, currentUserID };

  const stateOfPostsList = () => (usersPosts.list[currentUserID.id]
    .map((post) => {
      return (<PostPosted
        key={post.messageID}
        post={post}
        photo={usersProfileInfo.list[post.userID].photo}
      />)
    }));

  const [postedPosts, setPostedPosts] = useState(stateOfPostsList());
  const addPost = () => {
    store.dispatch(addPostActionCreator());
    setPostedPosts(stateOfPostsList());
  };
  return (
    <div className={s.postBlock}>
      <h1 className={s.postBlock__title}>My posts</h1>
      <PostPoster addPost={addPost} store={storeTo_PostPoster} />
      <PostPostedList postedPosts={postedPosts} />
    </div>
  );
}

export default PostBlock;