import s from './PostBlock.module.css';

import { TextInputPostBlockContainer } from './TextInputPostBlockContainer/TextInputPostBlockContainer';
import { PostPostedListContainer } from './PostPostedList/PostPostedListContainer/PostPostedListContainer';


function PostBlock() {
  return (
    <div className={s.postBlock}>
      <h1 className={s.postBlock__title}>My posts</h1>
      <TextInputPostBlockContainer
        className={s.postBlock__TextInput}
      />
      <PostPostedListContainer />
    </div>
  );
}

export default PostBlock;