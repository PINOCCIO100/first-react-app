import { React, useState } from 'react';
import s from './PostBlock.module.css';
// TODO как-то убрать импорты
import { addPostActionCreator, getPostPosterTextActionCreator, setPostPosterTextActionCreator } from '../../../dataBase/store';

import TextInput from '../../_sharedComponents/TextInput/TextInput';
import PostPostedList from './PostPostedList/PostPostedList';
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

  const getTextFromBLL = () => {
    return store.dispatch(getPostPosterTextActionCreator());
  }
  const setTextToBLL = (currentTextUI) => {
    store.dispatch(setPostPosterTextActionCreator(currentTextUI));
  }
  const addPost = () => {
    store.dispatch(addPostActionCreator());
    setPostedPosts(stateOfPostsList());
  };


  return (
    <div className={s.postBlock}>
      <h1 className={s.postBlock__title}>My posts</h1>
      <TextInput
        className={s.postBlock__TextIput}
        getTextFromBLL={getTextFromBLL}
        setTextToBLL={setTextToBLL}
        sendText={addPost}
        labels={{
          placeholder: 'Your news...',
          button: 'Send',
        }} />
      <PostPostedList postedPosts={postedPosts} />
    </div>
  );
}

export default PostBlock;