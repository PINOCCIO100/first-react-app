import { React, useState } from 'react';
import s from './PostBlock.module.css';

import TextInputPostBlockContainer from './TextInputPostBlockContainer/TextInputPostBlockContainer';
import { PostPostedListContainer } from './PostPostedList/PostPostedListContainer/PostPostedListContainer';


function PostBlock(props) {

  const [postedPosts, setPostedPosts] = useState([]);

  return (
    <div className={s.postBlock}>
      <h1 className={s.postBlock__title}>My posts</h1>
      <TextInputPostBlockContainer
        setPostedPosts={setPostedPosts}
        className={s.postBlock__TextInput}
      />
      <PostPostedListContainer setPostedPosts={setPostedPosts}>
        {postedPosts}
      </PostPostedListContainer>
    </div>
  );
}

export default PostBlock;