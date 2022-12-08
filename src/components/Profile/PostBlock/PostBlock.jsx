import { React, useState } from 'react';
import s from './PostBlock.module.css';
// TODO как-то убрать импорты
import { setPostPosterTextActionCreator, addPostActionCreator } from '../../../dataBase/reducers/usersPostsReducer';

import TextInput from '../../_sharedComponents/TextInput/TextInput';
import PostPostedList from './PostPostedList/PostPostedList';
import PostPosted from './PostPostedList/PostPosted/PostPosted';

function PostBlock({ store }) {
  const {
    usersProfileInfo,
    currentUserID,
  } = store.getState().ProfileState;
  
  const stateOfPostsList = () => {
    return (store.getState().PostsState.usersPosts[currentUserID]
      .map((post) => {
        return (<PostPosted
          key={post.messageID}
          post={post}
          photo={usersProfileInfo[post.userID].photo} />);
      }));
  };

  const [postedPosts, setPostedPosts] = useState(stateOfPostsList());

  const getTextFromBLL = () => {
    return store.getState().PostsState.usersPostPosterText[currentUserID]
  }
  const setTextToBLL = (currentTextUI) => {
    store.dispatch(setPostPosterTextActionCreator(currentUserID, currentTextUI));
  }
  const addPost = () => {
    store.dispatch(addPostActionCreator(currentUserID));
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